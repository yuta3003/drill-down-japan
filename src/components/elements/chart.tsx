"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", 需要予測: 3700, 供給予測: 3000 },
  { month: "Feb", 需要予測: 4500, 供給予測: 3200 },
  { month: "Mar", 需要予測: 5000, 供給予測: 3700 },
  { month: "Apr", 需要予測: 5700, 供給予測: 4000 },
  { month: "May", 需要予測: 5500, 供給予測: 3800 },
  { month: "Jun", 需要予測: 5600, 供給予測: 3600 },
  { month: "Jul", 需要予測: 5700, 供給予測: 3900 },
  { month: "Aug", 需要予測: 5800, 供給予測: 4100 },
  { month: "Sep", 需要予測: 5700, 供給予測: 4000 },
  { month: "Oct", 需要予測: 5300, 供給予測: 3800 },
  { month: "Nov", 需要予測: 5000, 供給予測: 3700 },
  { month: "Dec", 需要予測: 4600, 供給予測: 3600 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* 需要予測のライン（青色） */}
        <Line type="monotone" dataKey="需要予測" stroke="#8884d8" strokeWidth={2} />
        {/* 供給予測のライン（緑色） */}
        <Line type="monotone" dataKey="供給予測" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
