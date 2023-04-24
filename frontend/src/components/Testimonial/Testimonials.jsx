import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-4.jpg";
import ava02 from "../../assets/images/ava-5.jpg";
import ava03 from "../../assets/images/ava-6.jpg";
import ava04 from "../../assets/images/ava-7.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Trang web quản lý tour du lịch HIAN là một nền tảng hoàn hảo để tìm
          kiếm, đặt và quản lý các tour du lịch một cách dễ dàng và tiện lợi.
          Thiết kế đẹp mắt và tính năng thông minh giúp người dùng trải nghiệm
          tuyệt vời. Tôi rất thích điều đó.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          HIAN còn cung cấp cho khách hàng một loạt các chương trình tour du
          lịch đa dạng về địa điểm, thời gian và giá cả phù hợp với nhu cầu của
          mọi đối tượng khách hàng. Bên cạnh đó, trang web cũng được thiết kế
          đơn giản và dễ sử dụng.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Chắc chắn rằng HIAN là một trong những trang web quản lý tour du lịch
          tốt nhất trên thị trường. HIAN không chỉ cung cấp các tour du lịch đa
          dạng về địa điểm và chủ đề, mà còn đảm bảo chất lượng dịch vụ và trải
          nghiệm của khách hàng.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          HIAN là một trang web quản lý tour du lịch rất tốt. Giao diện trang
          web được thiết kế đẹp mắt, dễ sử dụng và tương thích với nhiều thiết
          bị khác nhau, từ máy tính đến điện thoại di động. Ngoài ra, trang web
          cũng cung cấp nhiều thông tin hữu ích về các tour du lịch.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
