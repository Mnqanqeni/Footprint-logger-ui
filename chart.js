let chart;

function updateChart(data) {
  const ctx = document.getElementById('footprintChart').getContext('2d');
  const categories = {};
  
  data.forEach(({ category, value }) => {
    categories[category] = (categories[category] || 0) + value;
  });

  const labels = Object.keys(categories);
  const values = Object.values(categories);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        label: 'CO₂ by Category',
        data: values,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
      }]
    }
  });
}
