import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TOUR_CREATE_RESET } from "../../Redux/Constants/TourConstants";
import { createTours } from "../../Redux/Actions/TourActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddTourMain = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  //
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  //
  const [photo, setPhoto] = useState("");
  // const [countInStock, setCountInStock] = useState(0);
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const tourCreate = useSelector((state) => state.tourCreate);
  const { loading, error, tour } = tourCreate;
  useEffect(() => {
    if (tour) {
      alert("add success");
      toast.success("Tour Added Success", ToastObjects);
      dispatch({ type: TOUR_CREATE_RESET });
      setTitle("");
      setDesc("");
      setPhoto("");
      setPrice(0);
      setMaxGroupSize(0);
      setAddress("");
      setCity("");
    }
  }, [tour, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTours(title, city, address, photo, desc, price, maxGroupSize)
    );
  };
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/tours" className="btn btn-primary text-white">
              Quay lại danh sách tour
            </Link>
            <h2 className="content-title">Thêm Tour</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm mới tour
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="tour_title" className="form-label">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_price"
                      required
                      value={price}
                      // onChange={(e) => setPrice(e.target.value)}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue < 0) {
                          setPrice(0);
                        } else {
                          setPrice(newValue);
                        }
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tour_maxgroupsize" className="form-label">
                      Max Group Size
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="tour_maxgroupsize"
                      required
                      value={maxGroupSize}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 0) {
                          setMaxGroupSize(value);
                        }
                      }}
                      // onChange={(e) => setMaxGroupSize(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Hình ảnh</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={photo}
                      required
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddTourMain;
