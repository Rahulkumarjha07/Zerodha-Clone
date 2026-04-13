import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 12,
          },
          padding: 15,
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },

    cutout: "65%", // makes it modern donut
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        height: "300px",
        margin: "0 auto",
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}