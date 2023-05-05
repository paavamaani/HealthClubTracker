import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Activities.module.css";

import BarChart from "../BarChart/BarChart";
import LineGraph from "../LineGraph/LineGraph";

const BASE_URL = "http://localhost:3001";
const ACTIVITIES_API = "/activities";

function Activities() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      if (email) {
        const json = {
          "email": email
        };

        const response = await axios.post(`${BASE_URL}${ACTIVITIES_API}`, json);
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  const formatActivity = (activity) => {
    return (
      <div className={styles.chart}>
        <h3>{activity.name}</h3>
        <p>{activity.value}</p>
      </div>
    );
  };

  const formatCharts = () => {
    const charts = [];
    if (data) {
      const weekActivities = [
        { name: "Threadmill", values: [data.threadmillWeek], color: "#008080" },
        { name: "Cycling", values: [data.cyclingWeek], color: "#FF6347" },
        { name: "Stair Machines", values: [data.stairMachinesWeek], color: "#228B22" },
        { name: "Weight Training", values: [data.weightTrainingWeek], color: "#8B008B" },
      ];
      
      const monthActivities = [
        { name: "Threadmill", value: data.threadmillMonth, color: "#008080" },
        { name: "Cycling", value: data.cyclingMonth, color: "#FF6347" },
        { name: "Stair Machines", value: data.stairMachinesMonth, color: "#228B22" },
        { name: "Weight Training", value: data.weightTrainingMonth, color: "#8B008B" },
      ];
      
      const ninetyDaysActivities = [
        { name: "Threadmill", values: [data.threadmillNinetyDays], color: "#008080" },
        { name: "Cycling", values: [data.cyclingNinetyDays], color: "#FF6347" },
        { name: "Stair Machines", values: [data.stairMachinesNinetyDays], color: "#228B22" },
        { name: "Weight Training", values: [data.weightTrainingNinetyDays], color: "#8B008B" },
      ];
      
      charts.push(
        <div key="week" className={styles.chartsContainer}>
          <h2>Last Week</h2>
          <LineGraph activities={weekActivities} />
        </div>
      );

      charts.push(
        <div key="month" className={styles.chartsContainer}>
          <h2>Last Month</h2>
          <BarChart activities={monthActivities} />
        </div>
      );

      charts.push(
        <div key="90days" className={styles.chartsContainer}>
          <h2>Last 90 Days</h2>
          <LineGraph activities={ninetyDaysActivities} />
        </div>
      );
    }
    return charts;
  };

  return <div className={styles.container}>{formatCharts()}</div>;
}

export default Activities;
