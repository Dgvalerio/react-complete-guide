import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

export interface IDataPoint {
  label: string;
  value: number;
}

const Chart = ({ dataPoints }: { dataPoints: IDataPoint[] }): JSX.Element => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={totalMaximum}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
