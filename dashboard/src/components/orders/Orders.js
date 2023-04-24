import React from "react";
// import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { booking } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng chi phí</th>
          <th scope="col">Thành Viên</th>
          <th scope="col">Ngày đăng ký</th>
          <th>Phone</th>
          {/* <th scope="col" className="text-end">
            Xác nhận
          </th> */}
        </tr>
      </thead>
      <tbody>
        {booking.map((booking) => (
          <tr key={booking._id}>
            <td>
              <div>{booking.fullName}</div>
              <b>{booking.title}</b>
            </td>
            <td>{booking.userEmail}</td>
            <td>{booking.totalPrice} VND</td>
            <td>
              {booking.guestSize}
            </td>
            <td>{moment(booking.createdAt).format("MMM Do YY")}</td>
            <td>
              {/* {booking.phone} */}
               {`${booking.phone}`.padStart(10, '0')}
            </td>
            {/* <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${booking._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
