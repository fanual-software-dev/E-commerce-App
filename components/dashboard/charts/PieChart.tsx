"use client"; // Required if you're using Next.js App Router

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Pie chart data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr","Jan", "Feb",],
  datasets: [
    {
      label: "Sales (in 1000s)",
      data: [15, 32,53, 25, 12, 14],
      backgroundColor: [
        "rgba(235, 68, 38)",    // yellow-500
        "rgba(38, 94, 235)",    // red-500
        "rgba(26, 235, 113)",   // blue-500
        "rgba(235, 38, 110)",    // green-500
        "rgba(235, 222, 38)",    // yellow-500
        "rgba(38, 235, 205)",
      ],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Monthly Sales Distribution",
    },
  },
};

export default function SalesPieChart() {
  return <Pie data={data} options={options} />;
}
