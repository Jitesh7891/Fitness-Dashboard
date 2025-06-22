export const getLabels = (data, viewType) => {
  return data.map(d => {
    const date = new Date(d.date);
    if (viewType === 'daily') {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else if (viewType === 'weekly') {
      // e.g., Week number in month
      return `Week ${Math.ceil(date.getDate() / 7)}`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short' });
    }
  });
};
