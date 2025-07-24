import React, { useState } from "react";

const sampleData = [
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" },
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" },
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" },
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" },
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" },
  { id: "PRGR-0028D23", price: "$725.00", progress: 20, status: "In Execution" },
  { id: "PRGR-0265K81", price: "$2000.00", progress: 40, status: "Done" },
  { id: "PRGR-4789Z10", price: "$3200.00", progress: 70, status: "In Execution" },
  { id: "PRGR-3157J84", price: "$2100.00", progress: 90, status: "In Execution" }
];

const statusColors = {
  "In Execution": { color: "#7E22CE", bg: "#F3E8FF" },
  "Done": { color: "#15803D", bg: "#DCFCE7" }
};

export default function ProjectsTable() {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState({});

  const filtered = sampleData.filter(item =>
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
  const allSelected = paginated.every((_, index) => selectedRows[(currentPage - 1) * perPage + index]);

  const toggleAll = (checked) => {
    const updated = { ...selectedRows };
    paginated.forEach((_, index) => {
      updated[(currentPage - 1) * perPage + index] = checked;
    });
    setSelectedRows(updated);
  };

  


  return (
    <div className="border rounded-4 shadow-sm bg-white p-3 mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h6 className="fw-semibold mb-0">Projects</h6>

        <div  className="d-flex border rounded-2"  style={{ maxWidth: 200 }}>
<img src="/images/search.svg" alt="Search" className="me-2"  />

<input 
  autoComplete="off"
  type="text"
  className="form-control form-control-sm border-0"
  placeholder="Search..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
  style={{ width: "100%", outline: "none", boxShadow: "none" }}
/>

        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th className="border">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => toggleAll(e.target.checked)}
                />
              </th>
              <th className="border">Team<img src="/images/arrow.svg" alt="Sort" className="ms-1" style={{ cursor: "pointer" }} /></th>
              <th className="border">Price<img src="/images/arrow.svg" alt="Sort" className="ms-1" style={{ cursor: "pointer" }} /></th>
              <th className="border">Timeline<img src="/images/arrow.svg" alt="Sort" className="ms-1" style={{ cursor: "pointer" }} /></th>
              <th className="border">Status<img src="/images/arrow.svg" alt="Sort" className="ms-1" style={{ cursor: "pointer" }} /></th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, index) => {
              const globalIndex = (currentPage - 1) * perPage + index;
              return (
                <tr key={globalIndex}>
                  <td className="border">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[globalIndex]}
                      onChange={(e) =>
                        setSelectedRows({
                          ...selectedRows,
                          [globalIndex]: e.target.checked
                        })
                      }
                    />
                  </td>
                  <td className="fw-semibold text-primary border">{item.id}</td>
                  <td className="border">{item.price}</td>
                  <td>
                    <div className="bg-light rounded-pill" style={{ height: 6, width: 120 }}>
                      <div
                        className="bg-success rounded-pill"
                        style={{ width: `${item.progress}%`, height: "100%" }}
                      />
                    </div>
                  </td>
                  <td className="border">
                    <span
                      className="badge fw-normal"
                      style={{
                        backgroundColor: statusColors[item.status].bg,
                        color: statusColors[item.status].color
                      }}
                    >
                      <span
                        className="me-1"
                        style={{
                          display: "inline-block",
                          width: 8,
                          height: 8,
                          backgroundColor: statusColors[item.status].color,
                          borderRadius: "50%"
                        }}
                      />
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <span>Show</span>
          <select
            className="form-select form-select-sm"
            value={perPage}
            onChange={(e) => {
              setPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            style={{ width: 80 }}
          >
            {Array.from(
              { length: Math.ceil(filtered.length / 5) },
              (_, i) => (i + 1) * 5
            ).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span>per page</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted" style={{ fontSize: "0.9rem" }}>
            {(currentPage - 1) * perPage + 1}-{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}
          </span>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>
                  &lt;
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 && "active"}`}>
                  <button className="page-link text-dark" style={{ backgroundColor: "#F1F1F4" }} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>
                  &gt;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
