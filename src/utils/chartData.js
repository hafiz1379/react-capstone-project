export const chartData = (infoArr) => ({
  labels: ['CO', 'NH₃', 'NO', 'NO₂', 'O₃', 'PM₂.₅', 'PM₁₀', 'SO₂'],
  datasets: [
    {
      label: 'Quantity',
      data: [
        infoArr.co,
        infoArr.nh3,
        infoArr.no,
        infoArr.no2,
        infoArr.o3,
        infoArr.pm2_5,
        infoArr.pm10,
        infoArr.so2,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(94, 94, 94, 0.4)',
        'rgba(255, 255, 255, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(94, 94, 94, 1)',
        'rgba(255, 255, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const getDisplayName = (key) => {
  switch (key) {
    case 'co':
      return 'Carbon monoxide (CO)';
    case 'nh3':
      return 'Ammonia (NH₃)';
    case 'no':
      return 'Nitric oxide (NO)';
    case 'no2':
      return 'Nitrogen dioxide (NO₂)';
    case 'o3':
      return 'Ozone (O₃)';
    case 'pm2_5':
      return 'Fine particulate matter (PM₂.₅)';
    case 'pm10':
      return 'Coarse particulate matter (PM₁₀)';
    case 'so2':
      return 'Sulfur dioxide (SO₂)';
    default:
      return key;
  }
};
