import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';
import { getLabels } from '../utils/chartUtils';

const StepsChart = ({ data, viewType, darkMode }) => {

  // References for canvas and chart instance
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  // Detect small screens for responsive behavior
  const isMobile = window.innerWidth < 576;

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Recreate chart only when data or viewType changes
    if (chartInstance.current) chartInstance.current.destroy();

    const labels = getLabels(data, viewType);
    const ctx = canvasRef.current.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    if (darkMode) {
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.2)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
    } else {
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.15)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
    }

    const borderGradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    borderGradient.addColorStop(0, 'rgb(16, 185, 129)');
    borderGradient.addColorStop(0.5, 'rgb(5, 150, 105)');
    borderGradient.addColorStop(1, 'rgb(6, 120, 95)');

    const textColor = darkMode ? '#f3f4f6' : '#111827';
    const gridColor = darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(156, 163, 175, 0.2)';
    const tickColor = darkMode ? '#d1d5db' : '#6b7280';
    const tooltipBg = darkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(17, 24, 39, 0.95)';
    const tooltipText = darkMode ? '#f3f4f6' : '#f9fafb';

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Steps',
          data: data.map(d => d.steps),
          borderColor: borderGradient,
          backgroundColor: gradient,
          tension: 0.4,
          fill: true,
          borderWidth: 3,
          pointBackgroundColor: 'rgb(16, 185, 129)',
          pointBorderColor: darkMode ? '#1f2937' : '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: 'rgb(5, 150, 105)',
          pointHoverBorderColor: darkMode ? '#1f2937' : '#ffffff',
          pointHoverBorderWidth: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 0 
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic'
        },
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Steps Trend',
            font: { size: 16, weight: '600' },
            color: textColor,
            padding: { top: 10, bottom: isMobile ? 5 : 25 }
          },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
            borderColor: 'rgb(16, 185, 129)',
            borderWidth: 2,
            cornerRadius: 10,
            padding: 15,
            displayColors: false,
            titleFont: { size: 14, weight: '600' },
            bodyFont: { size: 13, weight: '500' },
            callbacks: {
              label: ctx => `Steps: ${ctx.parsed.y.toLocaleString()}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: tickColor,
              font: { size: isMobile ? 10 : 12, weight: '500' },
              padding: isMobile ? 5 : 12
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: gridColor,
              drawBorder: false,
              lineWidth: 1
            },
            border: { display: false },
            ticks: {
              color: tickColor,
              font: { size: isMobile ? 10 : 12, weight: '500' },
              padding: isMobile ? 5 : 12,
              callback: value => value >= 1000 ? `${value / 1000}k` : value
            }
          }
        }
      }
    });

    // Cleanup chart on unmount or dependency change
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [data, viewType]);

  return (
    <div style={{ 
      height: '300px',
      padding: isMobile ? '0' : '20px',
      position: 'relative',
      background: 'light-dark(linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%), linear-gradient(135deg, #064e3b 0%, #065f46 50%, #1f2937 100%))',
      borderRadius: '16px',
      boxShadow: 'light-dark(inset 0 1px 3px rgba(0, 0, 0, 0.05), inset 0 1px 3px rgba(255, 255, 255, 0.05))',
      border: 'light-dark(1px solid rgba(16, 185, 129, 0.1), 1px solid rgba(16, 185, 129, 0.2))'
    }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default StepsChart;
