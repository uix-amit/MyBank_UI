import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

function BarChart({ data, categories }: { data: ApexAxisChartSeries; categories: string[] }) {
  const options: ApexOptions = {
    chart: {
      id: 'basic-area',
    },
    xaxis: {
      categories,
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
      },
    },
  };

  return <Chart options={options} series={data} type='bar' />;
}

export default BarChart;
