import React from "react";
import Header from "../components/Header";
import Item from "../components/Dashboard/Item";
import EarningsChart from "../components/Dashboard/EarningsChart";
import BudgetCard from "../components/Dashboard/BudgetCard";
import ProjectsTable from "../components/Dashboard/ProjectsTable";

export default function Dashboard() {
  const items = [
    { icon: "/images/total.svg", number: 24, subtitle: "Total" },
    { icon: "/images/review.svg", number: 12, subtitle: "Review" },
    { icon: "/images/approved.svg", number: 7, subtitle: "Approved" },
    { icon: "/images/rejected.svg", number: 3, subtitle: "Rejected" },
  ];

  const earningsData = [
    { name: "Jan", earning: 0 },
    { name: "Feb", earning: 10 },
    { name: "Mar", earning: 18 },
    { name: "Apr", earning: 14 },
    { name: "May", earning: 24 },
    { name: "Jun", earning: 20 },
    { name: "Jul", earning: 26 },
    { name: "Aug", earning: 30 },
    { name: "Sep", earning: 36 },
    { name: "Oct", earning: 33 },
    { name: "Nov", earning: 38 },
    { name: "Dec", earning: 40 },
  ];



  const budgetData = {
    title: "Budget",
    totalSales: "$159.2k",
    growth: "+2.0%",
    bars: [
      { width: "60%", color: "#1665D8" },
      { width: "25%", color: "#DC3545" },
      { width: "15%", color: "#2AB885" }
    ],
    categories: [
      { name: "Core App", color: "#1665D8" },
      { name: "Add-ons", color: "#DC3545" },
      { name: "Integrations", color: "#2AB885" }
    ],
    stats: [
      { name: "Online Store", amount: "$140k", change: "3.9%", positive: true },
      { name: "Facebook", amount: "$79k", change: "0.7%", positive: false },
      { name: "Instagram", amount: "$31k", change: "8.2%", positive: true }
    ]
  };

  return (
    <>
      <Header title="Dashboard" subtitle="Central Hub for Personal Customization" />
      <div className="container-fluid px-4 mt-3">
        <div className="row align-items-stretch" style={{ minHeight: 320 }}>
          <div className="col-lg-4 mb-4 d-flex">
            <div className="row g-3 w-100">
              {items.map((item, index) => (
                <div className="col-6" key={index}>
                  <Item icon={item.icon} number={item.number} subtitle={item.subtitle} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8 d-flex">
            <div className="border border-1 shadow-sm rounded-4 w-100 d-flex flex-column justify-content-between">
              <div className="d-flex flex-wrap align-items-center px-4 justify-content-between">
                <div className="d-flex flex-column justify-content-between" style={{ width: "55%" }}>
                  <div className="d-flex mb-3">
                    <img src="/images/avatar1.svg" alt="Avatar 1" className="rounded-circle border" style={{ width: 40, height: 40, marginRight: -10, zIndex: 4 }} />
                    <img src="/images/avatar2.svg" alt="Avatar 2" className="rounded-circle border" style={{ width: 40, height: 40, marginRight: -10, zIndex: 3 }} />
                    <img src="/images/avatar3.svg" alt="Avatar 3" className="rounded-circle border" style={{ width: 40, height: 40, marginRight: -10, zIndex: 2 }} />
                    <img src="/images/avatar4.svg" alt="Avatar 4" className="rounded-circle border" style={{ width: 40, height: 40, zIndex: 1 }} />
                  </div>
                  <h5 className="fw-semibold mb-2">Invite your team member & start collaborating</h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Work together with your team by inviting members to your workspace. Collaborate, manage tasks, and share files easily.
                  </p>
                </div>
                <div style={{ width: "40%" }}>
                  <img src="/images/dashboardRightSide.svg" className="img-fluid" alt="sideimage" />
                </div>
              </div>
              <div className="text-center py-2 border-top">
                <span className="fw-semibold" style={{ textDecoration: "underline dotted" }}>
                  Invite New Team Member
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-stretch mt-4" style={{ minHeight: 320 }}>
          <div className="col-lg-4 mb-4 d-flex">
            <div className="w-100 border border-1 rounded-4 shadow-sm">
              <BudgetCard
                title={budgetData.title}
                totalSales={budgetData.totalSales}
                growth={budgetData.growth}
                bars={budgetData.bars}
                categories={budgetData.categories}
                stats={budgetData.stats}
              />
            </div>
          </div>
          <div className="col-lg-8 d-flex">
            <div className="border border-1 shadow-sm rounded-4 w-100 py-3 d-flex flex-column justify-content-between">
              <div className="px-4 py-2  border-bottom mb-3">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                    <h6 className="fw-semibold mb-0">Earning</h6>
                  </div>
                  <div className="col-12 col-sm-8">
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <span className="text-muted" style={{ fontSize: "0.9rem" }}>Referrals only</span>
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input bg-secondary border-0"
                          type="checkbox"
                          style={{ boxShadow: "none" }}
                        />
                      </div>
                      <div style={{ minWidth: 100, maxWidth: 150 }}>
                        <select
                          className="form-select form-select-sm rounded-1 bg-light border-1 w-100"
                          style={{ boxShadow: "none" }}
                        >
                          <option>12 Months</option>
                          <option>6 Months</option>
                          <option>3 Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3" style={{ width: "100%", height: 220 }}>
                <EarningsChart data={earningsData} />
              </div>
            </div>
          </div>
        </div>

        <ProjectsTable />
      </div>
    </>
  );
}
