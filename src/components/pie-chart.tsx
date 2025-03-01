import Chart from 'react-apexcharts';

import { AccountBalanceByBank } from '@shared/models/dashboard-data';

function PieChart({ series }: { series: AccountBalanceByBank[] }) {
  const options = {
    chart: {
      id: 'basic-pie',
    },
    labels: series.map(({ BankName }) => BankName),
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

  return (
    <Chart options={options} series={series.map(({ TotalBalance }) => TotalBalance)} type='pie' />
  );
}

export default PieChart;
