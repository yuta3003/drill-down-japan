"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "金沢市", 需要: 5000, 供給率: 4850 },
  { name: "七尾市", 需要: 4000, 供給率: 1780 },
  { name: "小松市", 需要: 3500, 供給率: 650 },
  { name: "輪島市", 需要: 3000, 供給率: 700 },
  { name: "珠洲市", 需要: 2000, 供給率: 500 },
  { name: "加賀市", 需要: 4500, 供給率: 800 },
];

export default function DemandSupplyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="需要" fill="#8884d8" barSize={20} />
        <Bar dataKey="供給率" fill="#82ca9d" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
