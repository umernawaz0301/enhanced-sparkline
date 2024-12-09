import React, { useEffect, useRef } from "react";
import "./styles.css";

interface GraphProps {
  data: (number | null)[]; // Array of numbers or null values
  labels?: string[]; // X-axis labels (optional)
  yMin?: number; // Minimum Y-axis value (optional)
  yMax?: number; // Maximum Y-axis value (optional)
  width?: number; // Width of the canvas (optional)
  height?: number; // Height of the canvas (optional)
}

const Graph: React.FC<GraphProps> = ({
  data,
  yMin = 10,
  yMax = 40,
  labels = [],
  width = 150,
  height = 80,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setupHighResolutionCanvas = (
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ): CanvasRenderingContext2D => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);
    return ctx;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = setupHighResolutionCanvas(canvas, width, height);
      const numPoints = data.length;

      // Add padding to the X-axis
      const paddingX = 10;
      const pointSpacing = (width - paddingX * 2) / (numPoints - 1);

      const valueRange = yMax - yMin;
      const yScale = height / valueRange;

      // Draw the background area (light red)
      ctx.fillStyle = "rgba(255, 0, 0, 0.1)";
      ctx.beginPath();
      let isFilling = false;

      data.forEach((value, index) => {
        if (value !== null) {
          const x = paddingX + index * pointSpacing;
          const y = height - (value - yMin) * yScale;

          if (!isFilling) {
            ctx.moveTo(x, height);
            ctx.lineTo(x, y);
            isFilling = true;
          } else {
            ctx.lineTo(x, y);
          }
        } else if (isFilling) {
          const lastX = paddingX + (index - 1) * pointSpacing;
          ctx.lineTo(lastX, height);
          ctx.closePath();
          ctx.fill();
          isFilling = false;
          ctx.beginPath();
        }
      });

      if (isFilling) {
        const lastX = paddingX + (numPoints - 1) * pointSpacing;
        ctx.lineTo(lastX, height);
        ctx.closePath();
        ctx.fill();
      }

      // Draw the line
      ctx.beginPath();
      ctx.strokeStyle = "#ff0101";
      ctx.lineWidth = 1;

      data.forEach((value, index) => {
        if (value !== null) {
          const x = paddingX + index * pointSpacing;
          const y = height - (value - yMin) * yScale;
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      });

      ctx.stroke();

      // Draw dots
      ctx.fillStyle = "#ff0101";
      data.forEach((value, index) => {
        if (value !== null) {
          const x = paddingX + index * pointSpacing;
          const y = height - (value - yMin) * yScale;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw labels
      ctx.fillStyle = "#878787";
      ctx.font = "8px Arial";
      ctx.textAlign = "center";
      labels.forEach((label, index) => {
        const x = paddingX + index * pointSpacing;
        const y = height + 15;
        ctx.fillText(label, x, y);
      });
    }
  }, [data, yMin, yMax, width, height, labels]);

  return <canvas ref={canvasRef} />;
};

export default Graph;
