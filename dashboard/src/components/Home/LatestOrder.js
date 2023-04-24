import moment from "moment";
import React from "react";
// import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, booking } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">Tour mới</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {booking.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div>{booking.fullName}</div>
                    <b>{booking.title}</b>
                  </td>
                  <td>{booking.userEmail}</td>
                  <td>{booking.totalPrice} VND</td>
                  {/* <td>{booking.guestSize}</td> */}
                  <td>{moment(booking.createdAt).format("MMM Do YY")}</td>
                  <td>{`${booking.phone}`.padStart(10, '0')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
