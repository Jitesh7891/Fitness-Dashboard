export const generateDummyData = (viewType) => {
  const data = []
  const today = new Date()

  if (viewType === 'daily') {
    // 7 days: today and the 6 days before
    for (let i = 6; i >= 0; i--) {
      const dt = new Date(today)
      dt.setDate(today.getDate() - i)
      data.push(formatEntry(dt))
    }

  } else if (viewType === 'weekly') {
    // last 4 weeks: take today's date minus 7*i
    for (let i = 3; i >= 0; i--) {
      const dt = new Date(today)
      dt.setDate(today.getDate() - i * 7)
      data.push(formatEntry(dt))
    }

  } else if (viewType === 'monthly') {
    // last 12 months: use the 1st of each month
    for (let i = 11; i >= 0; i--) {
      const year = today.getFullYear()
      const month = today.getMonth() - i
      const dt = new Date(year, month, 1)
      data.push(formatEntry(dt))
    }

  } else {
    throw new Error("generateDummyData: viewType must be 'daily', 'weekly' or 'monthly'")
  }

  return data
}

/** helper to build one data point */
function formatEntry(date) {
  return {
    date: date.toISOString().split('T')[0],
    steps:    Math.floor(Math.random() * 5000) + 6000,
    calories: Math.floor(Math.random() * 800)  + 1800,
    workouts: Math.floor(Math.random() * 3),
    distance: (Math.random() * 5 + 2).toFixed(1),
    activeMinutes: Math.floor(Math.random() * 60) + 30
  }
}
