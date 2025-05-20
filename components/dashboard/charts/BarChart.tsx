// components/BarChart.tsx
"use client"; // Important if using App Router

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data and options
const data = {
  labels: ["Accessories", "Clothes", "Electronics", "Jeweleries",],
  datasets: [
    {
      label: "Sales",
      data: [900, 500, 750, 300],
      backgroundColor: "rgba(26 26, 26)", // Tailwind blue-500
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: {
      display: true,
      text: "Monthly Sales Report",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Products",
      },
    },
    y: {
      title: {
        display: true,
        text: "Units (in 1000s)",
      },
      ticks: {
        callback: (value: any) => `${value/100}k`,
      },
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
