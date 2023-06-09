import React, { useEffect } from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector,  useDispatch} from "react-redux";
// import { listOrders } from "../../Redux/Actions/OrderActions";
import { listBooking } from "../../Redux/Actions/BookingActions";

const OrderMain = () => {
  const dispatch = useDispatch();

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, booking } = bookingList;
  useEffect(() => {
    dispatch(listBooking());
  }, [dispatch]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Đơn hàng</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Trạng thái</option>
                <option>Đã xác nhận</option>
                <option>Từ chối</option>
                <option>Hiển thị tất cả</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiển thị 20</option>
                <option>Hiển thị 30</option>
                <option>Hiển thị 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders booking={booking} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
