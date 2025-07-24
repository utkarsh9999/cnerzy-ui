import React from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EarningsChart({ data }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-white shadow rounded-3 px-3 py-2"
          style={{ border: "1px solid #ccc", fontSize: 14 }}
        >
          <div className="fw-semibold mb-1 text-dark">{`${label}, 2025 Sales`}</div>
          <div className="fw-bold fs-6 text-dark">${payload[0].value * 1000}</div>
          <div className="fw-semibold" style={{ fontSize: "0.75rem", color: "#198754" }}>
            +2.0%
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.3)" />
            <stop offset="70%" stopColor="rgba(0, 0, 0, 0.05)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" vertical={false} />

        <XAxis dataKey="name" stroke="#000" tick={{ fill: "#000", fontSize: 12 }} />
        <YAxis
          domain={[0, 40]}
          stroke="#000"
          tick={{ fill: "#000", fontSize: 12 }}
          tickFormatter={(val) => `${val}k`}
        />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="earning"
          stroke="none"
          fill="url(#lineShadow)"
        />

        <Line
          type="monotone"
          dataKey="earning"
          stroke="#000"
          strokeWidth={3}
          dot={{ stroke: "#000", strokeWidth: 2, fill: "#fff", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
