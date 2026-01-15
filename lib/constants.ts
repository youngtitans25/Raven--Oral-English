import { UNIVERSITIES } from './institutions/universities';
import { COLLEGES_OF_EDUCATION } from './institutions/colleges';
import { POLYTECHNICS } from './institutions/polytechnics';
import { INNOVATION_ENTERPRISE_INSTITUTIONS } from './institutions/ieis';

export * from './config';
export * from './tools';
export * from './instructions';
export * from './locations';
export * from './dates';
export * from './financials';

// Academic Data
export * from './subjects';
export * from './faculties';
export * from './student-categories';
export * from './academic-levels';

// Institution Data
export * from './institutions/types';
export * from './institutions/universities';
export * from './institutions/colleges';
export * from './institutions/polytechnics';
export * from './institutions/ieis';

// Aggregated Institutions Object (Constructed for backward compatibility/ease of use)
export const CATEGORIZED_INSTITUTIONS: Record<string, string[]> = {
    "UNIVERSITIES AND OTHER DEGREE-AWARDING INSTITUTIONS": UNIVERSITIES,
    "COLLEGES OF EDUCATION": COLLEGES_OF_EDUCATION,
    "POLYTECHNICS AND MONOTECHNICS": POLYTECHNICS,
    "INNOVATION ENTERPRISE INSTITUTIONS": INNOVATION_ENTERPRISE_INSTITUTIONS
};
