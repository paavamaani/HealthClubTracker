import React from "react";
import styles from "./BarChart.module.css";

function BarChart(props) {
  const activities = props.activities;

  const maxValue = Math.max(...activities.map((activity) => activity.value));

  const formatActivity = (activity, index) => {
    const barHeight = (activity.value / maxValue) * 100;
    return (
      <g key={activity.name}>
        <title>{`${activity.name}: ${activity.value}`}</title>
        <rect x={`${index * 25}%`} y={`${100 - barHeight}%`} width="20%" height={`${barHeight}%`} fill={activity.color} />
        <text x={`${index * 25 + 10}%`} y="100%" textAnchor="middle" dominantBaseline="text-bottom" className={styles.label}>
          {activity.name}
        </text>
        <text x={`${index * 25 + 10}%`} y={`${100 - barHeight - 5}%`} textAnchor="middle" dominantBaseline="text-top" className={styles.value}>
          {activity.value}
        </text>
      </g>
    );
  };

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100" className={styles.chart}>
        {activities.map(formatActivity)}
      </svg>
    </div>
  );
}

export default BarChart;
