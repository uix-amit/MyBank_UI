import Chart from 'react-apexcharts';

function PieChart({ series }: { series: number[] }) {
  const options = {
    chart: {
      id: 'basic-pie',
    },
    labels: ['ICICI', 'SBI', 'HDFC'],
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: true,
      },
    },
  };

  return <Chart options={options} series={series} type='pie' />;
}

export default PieChart;
