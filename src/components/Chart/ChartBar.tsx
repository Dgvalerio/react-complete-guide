import React from 'react';

import './ChartBar.css';

const ChartBar = ({
  label,
  value,
  maxValue,
}: {
  label: string;
  value: number;
  maxValue: number;
}): JSX.Element => {
  let barFillHeight = '0%';

  if (maxValue) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
