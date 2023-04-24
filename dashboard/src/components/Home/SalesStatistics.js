import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê tour</h5>
          <iframe
            title="SalesStatistics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              // boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "480px",
              height: "350px",
            }}
            // src="https://charts.mongodb.com/charts-tour-booking-tlwcy/public/dashboards/a04ea405-3ac9-44c8-8480-ffd9bbaf4cbb"
            src="https://charts.mongodb.com/charts-tour-booking-tlwcy/embed/charts?id=643aea31-8ce8-4fc8-86f6-daab98704c83&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
