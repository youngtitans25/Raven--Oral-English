import { InteractionRecord, LearningItemRecord } from '../types';
import { apiRequest } from './apiClient';
import { supabase } from '../lib/supabase';

/**
 * Memory Service (Client Adapter)
 * 
 * In the Microservices architecture, this service acts as the bridge
 * between the React Frontend and the Learning & Mastery Service (LMS).
 * 
 * NOTE: For immediate compatibility while the Gateway is being deployed,
 * this service implements a hybrid approach (Direct DB fallbacks).
 */

export interface IMemoryService {
  startSession(studentId: string, subject: string, topic?: string): Promise<string | null>;
  endSession(sessionId: string): Promise<void>;
  logInteraction(data: Omit<InteractionRecord, 'timestamp'>): Promise<void>;
  logLearningItem(data: Omit<LearningItemRecord, 'timestamp'>): Promise<void>;
}

class MemoryServiceClient implements IMemoryService {
  
  async startSession(studentId: string, subject: string, topic?: string): Promise<string | null> {
    // 1. Handle Guest Users (Don't persist to DB)
    if (studentId.startsWith('guest-')) {
        return 'local-session-' + Date.now();
    }

    // ARCHITECTURE GOAL: Call Gateway -> LMS
    // const { data, error } = await apiRequest<{id: string}>('/api/v1/learning/sessions', 'POST', { subject, topic });
    // if (data) return data.id;

    // FALLBACK: Direct Supabase (until Gateway is live)
    try {
        // Note: Writing to the new 'learning' schema if RLS allows, or public for now
        // For migration safety, we use the public table structure but assume logic will move
        const { data, error } = await supabase
            .from('sessions') 
            .insert({
            student_id: studentId,
            subject,
            topic,
            start_time: new Date().toISOString(),
            status: 'active'
            })
            .select('id')
            .single();

        if (error) {
            // Check if it's likely a missing table or RLS issue and just log a warning instead of error
            // to prevent scary console output during development/demos
            if (error.code === '42P01' || error.code === 'PGRST301') {
                 console.warn('LMS Adapter: Sessions table not found or accessible. Running in ephemeral mode.');
            } else {
                 console.warn('LMS Adapter: Failed to start session', JSON.stringify(error));
            }
            return 'local-session-' + Date.now(); // Fallback to local session ID
        }
        return data?.id;
    } catch (e) {
        console.warn('LMS Adapter: Exception', e instanceof Error ? e.message : JSON.stringify(e));
        return 'local-session-' + Date.now();
    }
  }

  async endSession(sessionId: string): Promise<void> {
    if (sessionId.startsWith('local-session-')) return;

    try {
       // ARCHITECTURE GOAL: await apiRequest(`/api/v1/learning/sessions/${sessionId}/end`, 'POST');

       // FALLBACK
      await supabase
        .from('sessions')
        .update({
          end_time: new Date().toISOString(),
          status: 'completed'
        })
        .eq('id', sessionId);
    } catch (e) {
      console.warn('LMS Adapter: Failed to end session', e);
    }
  }

  async logInteraction(data: Omit<InteractionRecord, 'timestamp'>): Promise<void> {
    if (data.session_id.startsWith('local-session-')) return;

    // High volume endpoint - strictly fire and forget
    try {
        await supabase
        .from('interactions')
        .insert({
          session_id: data.session_id,
          role: data.role,
          content: data.content,
          metadata: data.metadata,
          timestamp: new Date().toISOString()
        });
    } catch (e) {
      // console.warn('LMS Adapter: Log interaction failed', e);
    }
  }

  async logLearningItem(data: Omit<LearningItemRecord, 'timestamp'>): Promise<void> {
    if (data.session_id.startsWith('local-session-')) return;

    try {
       await supabase
        .from('learning_items')
        .insert({
          session_id: data.session_id,
          term: data.term,
          context: data.context,
          timestamp: new Date().toISOString()
        });
    } catch (e) {
      // console.warn('LMS Adapter: Log item failed', e);
    }
  }
}

export const memoryService = new MemoryServiceClient();