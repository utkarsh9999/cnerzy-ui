import React from 'react';
export default function BudgetCard({ title, totalSales, growth, bars, categories, stats }) {
  return (
    <div className="w-100" style={{ maxWidth: "100%", minWidth: 0 }}>
      <div className="d-flex justify-content-between align-items-start px-3 py-3 border-bottom mb-2">
        <h6 className="fw-semibold mb-0 text-truncate" style={{ maxWidth: "80%" }}>{title}</h6>
        <div className="text-muted" style={{ cursor: "pointer", whiteSpace: "nowrap" }}>⋮</div>
      </div>

      <div className="mb-3 px-3">
        <small className="text-muted">All time sales</small>
        <div className="d-flex flex-wrap align-items-center gap-2">
          <h4 className="fw-bold mb-0">{totalSales}</h4>
          <span className="badge bg-light text-success border border-success fw-semibold" style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
            {growth}
          </span>
        </div>
      </div>

      <div className="d-flex mb-3 px-3" style={{ height: "8px", overflow: "hidden", borderRadius: "4px" }}>
        {bars.map((bar, idx) => (
          <div key={idx} style={{ width: bar.width, backgroundColor: bar.color }}></div>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-3 mb-3 px-3">
        {categories.map((cat, idx) => (
          <div key={idx} className="d-flex align-items-center gap-1">
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: cat.color }}></div>
            <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="border-top p-3">
        {stats.map((s, idx) => (
          <div key={idx} className="d-flex justify-content-between align-items-center py-1 flex-wrap">
            <span className="text-truncate" style={{ maxWidth: "50%" }}>{s.name}</span>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold text-truncate">{s.amount}</span>
              <span className={`fw-semibold ${s.positive ? "text-success" : "text-danger"}`}>
                {s.positive ? "↑" : "↓"} {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

