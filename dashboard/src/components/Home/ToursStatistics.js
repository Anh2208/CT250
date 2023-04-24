import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê tour </h5>
          <iframe
            title="ToursStatistics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              // boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-tour-booking-tlwcy/embed/charts?id=643b5573-e2f6-48a8-8b7a-c72c541a71b4&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
