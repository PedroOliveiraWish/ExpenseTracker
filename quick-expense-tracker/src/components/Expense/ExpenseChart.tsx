import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define props for dynamic data
interface PieChartProps {
  expenseData: { type: string; amount: number }[];
  width?: number; // Optional width prop
  height?: number; // Optional height prop
}

const PieChart: React.FC<PieChartProps> = ({ expenseData, width = 200, height = 200 }) => {
  const categorySum: { [key: string]: number } = {};

  expenseData.forEach((item) => {
    if (categorySum[item.type]) {
      categorySum[item.type] += item.amount;
    } else {
      categorySum[item.type] = item.amount;
    }
  });

  const categories = Object.keys(categorySum);
  const amounts = Object.values(categorySum);

  // Chart configuration
  const data = {
    labels: categories, // Categories for the pie chart
    datasets: [
      {
        label: "Expenses",
        data: amounts, // Expense amounts
        backgroundColor: [
          "#36A2EB", // Blue
          "#FF6384", // Red
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;