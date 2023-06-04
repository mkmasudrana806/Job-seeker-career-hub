import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A1", mark: 30, pv: 2400, amt: 2400 },
  { name: "A2", mark: 48, pv: 1398, amt: 2210 },
  { name: "A3", mark: 30, pv: 9800, amt: 2290 },
  { name: "A4", mark: 29, pv: 3908, amt: 2000 },
  { name: "A5", mark: 30, pv: 4800, amt: 2181 },
  { name: "A6", mark: 30, pv: 3800, amt: 2500 },
  { name: "A7", mark: 30, pv: 4300, amt: 2100 },
];

function Chart() {
  return (
    <LineChart
      style={{ margin: "100px auto" }}
      width={500}
      height={300}
      data={data}
    >
      <Line type="monotone" dataKey="mark" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
    </LineChart>
  );
}

export default Chart;
