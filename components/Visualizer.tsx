import React, { useEffect, useRef } from 'react';

interface VisualizerProps {
  analyser: AnalyserNode | null;
  isActive: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ analyser, isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!analyser || !canvasRef.current || !isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let animationId: number;

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      // Draw mirrored bars from center
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Calculate average volume for pulsing effect
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const avg = sum / bufferLength;
      
      // Draw circular glow based on volume
      if (avg > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, 50 + (avg * 0.5), 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(16, 185, 129, ${0.1 + (avg / 255) * 0.2})`; // Tailwind emerald-500 equivalent
        ctx.fill();
      }

      // Draw frequency bars
      // Only draw the lower 1/3 of frequencies which usually contain speech
      const relevantDataLength = Math.floor(bufferLength / 3);
      const angleStep = (2 * Math.PI) / relevantDataLength;
      const radius = 60;

      for (let i = 0; i < relevantDataLength; i++) {
         barHeight = Math.max(4, dataArray[i] * 0.6); // Scale height
         
         // Circular layout
         const angle = i * angleStep;
         
         const xStart = cx + Math.cos(angle) * radius;
         const yStart = cy + Math.sin(angle) * radius;
         const xEnd = cx + Math.cos(angle) * (radius + barHeight);
         const yEnd = cy + Math.sin(angle) * (radius + barHeight);

         ctx.strokeStyle = `rgba(16, 185, 129, ${0.5 + (dataArray[i] / 255)})`;
         ctx.lineWidth = 2;
         ctx.beginPath();
         ctx.moveTo(xStart, yStart);
         ctx.lineTo(xEnd, yEnd);
         ctx.stroke();
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = canvas.parentElement?.clientWidth || 300;
        canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [analyser, isActive]);

  return (
    <div className="w-full h-80 flex items-center justify-center relative">
        <canvas ref={canvasRef} className="z-10" />
        {/* Placeholder styling for when inactive */}
        {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="w-32 h-32 rounded-full border-4 border-gray-200 animate-pulse"></div>
            </div>
        )}
    </div>
  );
};

export default Visualizer;