import  { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { getLabels } from '../utils/chartUtils';

const BarChart = ({ data, viewType, label, title, borderColor, backgroundColor, optionsOverrides }) => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;
    if (chartInstance.current) chartInstance.current.destroy();

    const labels = getLabels(data, viewType);
    const ctx = canvasRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label,
          data: data.map(d => d[label.toLowerCase()]), 
          backgroundColor,
          borderColor,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: true, text: title }
        },
        scales: {
          y: { beginAtZero: true, ...(optionsOverrides?.scales?.y || {}) }
        },
        ...(optionsOverrides || {})
      }
    });

    // When toggling chart, destroy old one first then render new chart
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [data, viewType, label, title, borderColor, backgroundColor, optionsOverrides]);

  return (
    <div style={{ height: optionsOverrides?.height || '140px', position: 'relative' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default BarChart;
