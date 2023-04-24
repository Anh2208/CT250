import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listTours } from "../../Redux/Actions/TourActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const MainProducts = () => {
  const dispatch = useDispatch();

  const tourList = useSelector((state) => state.tourList);
  const { loading, error, tours } = tourList;
  // console.log("start main product")
  // console.log(productList)
  const tourDelete = useSelector((state) => state.tourDelete);
  const { error: errorDelete, success: successDelete } = tourDelete;
  useEffect(() => {
    dispatch(listTours());
  }, [dispatch, successDelete]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Tour</h2>
        <div>
          <Link to="/addtour" className="btn btn-primary">
            Thêm Tour
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Tất cả</option>
                <option>Tour Mới</option>
                <option>Tour Lễ Hội</option>
                <option>Tour Cao Cấp</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Mới nhất</option>
                <option>rẻ nhất</option>
                <option>Được đánh giá cao</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}
              {tours.map((tour) => (
                <Product tour={tour} key={tour._id} />
              ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Trước
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Tiếp theo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
