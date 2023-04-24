import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Không Lo Về Thời Tiết",
    desc: "Thời tiết không phải là vấn đề, đặt và đi.",
  },
  {
    imgUrl: guideImg,
    title: "Không Lo Về Chất Lượng",
    desc: "Đến với chúng tôi, chất lượng luôn tốt nhất.",
  },
  {
    imgUrl: customizationImg,
    title: "Tạo tour theo ý của bạn",
    desc: "Tour của chúng tôi, nhưng thiết kế theo ý của bạn.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
