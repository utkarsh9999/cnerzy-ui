export default function BudgetCard({ title, totalSales, growth, bars, categories, stats }) {
  return (
    <div  style={{ minWidth: 300 }}>
      <div className="d-flex border-bottom px-3 py-3 justify-content-between align-items-start mb-2">
        <h6 className="fw-semibold mb-0">{title}</h6>
        <div className="text-muted" style={{ cursor: "pointer" }}>⋮</div>
      </div>
      <div className="mb-3 px-3">
        <small className="text-muted">All time sales</small>
        <div className="d-flex align-items-center gap-2">
          <h4 className="fw-bold mb-0">{totalSales}</h4>
          <span className="badge bg-light text-success border border-success fw-semibold" style={{ fontSize: "12px" }}>
            {growth}
          </span>
        </div>
      </div>
      <div className="d-flex mb-3 px-3" style={{ height: "8px", overflow: "hidden", borderRadius: "4px" }}>
        {bars.map((bar, idx) => (
          <div key={idx} style={{ width: bar.width, backgroundColor: bar.color }}></div>
        ))}
      </div>
      <div className="d-flex gap-3 mb-3 px-3">
        {categories.map((cat, idx) => (
          <div key={idx} className="d-flex align-items-center gap-1">
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: cat.color }}></div>
            <span style={{ fontSize: "12px" }}>{cat.name}</span>
          </div>
        ))}
      </div>
      <div className="border-top pt-2 px-3">
        {stats.map((s, idx) => (
          <div key={idx} className="d-flex justify-content-between align-items-center py-1">
            <span>{s.name}</span>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-semibold">{s.amount}</span>
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
