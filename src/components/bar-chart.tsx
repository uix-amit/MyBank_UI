import { ApexOptions } from 'apexcharts';
import { format } from 'date-fns/format';
import { subDays } from 'date-fns/subDays';
import Chart from 'react-apexcharts';

function BarChart({ data }: { data: ApexAxisChartSeries }) {
  if (!data) {
    return <></>;
  }
  const getLast7Days = () => {
    const today = new Date();
    const last7Days = [];

    for (let i = 0; i < 7; i++) {
      const day = subDays(today, i);
      const dayName = format(day, 'EEE');
      last7Days.push(dayName);
    }

    return last7Days;
  };

  const options: ApexOptions = {
    chart: {
      id: 'basic-area',
    },
    xaxis: {
      categories: getLast7Days(),
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

  return <Chart options={options} series={JSON.parse(JSON.stringify(data))} type='bar' />;
}

export default BarChart;
