import React, { useState, useEffect } from "react";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTours, updateTours } from "../../Redux/Actions/TourActions";
import { TOUR_UPDATE_RESET } from "../../Redux/Constants/TourConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditTourMain = (props) => {
  const { tourId } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  //
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  //
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const tourEdit = useSelector((state) => state.tourEdit);
  const { loading, error, tour } = tourEdit;
  const tourUpdate = useSelector((state) => state.tourUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = tourUpdate;
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: TOUR_UPDATE_RESET });
      toast.success("Tour Updated Success", ToastObjects);
    } else {
      if (!tour.title || tour._id !== tourId) {
        dispatch(editTours(tourId));
      } else {
        setTitle(tour.title);
        setCity(tour.city);
        setAddress(tour.address);
        setDesc(tour.desc);
        setMaxGroupSize(tour.maxGroupSize);
        setPhoto(tour.photo);
        setPrice(tour.price);
      }
    }
  }, [tour, dispatch, tourId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTours({
        _id: tourId,
        // name,
        // price,
        // description,
        // image,
        // countInStock,
        title,
        city,
        address,
        photo,
        desc,
        price,
        maxGroupSize,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/tours" className="btn btn-danger text-white">
              Quay lại sản phẩm
            </Link>
            <h2 className="content-title">Chỉnh sửa sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                    <div className="card card-product-grid shadow-sm">
                        <img src={tour.photo} alt="Tour" />
                      </div>
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
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      {/* maxGroupSize start */}
                      <div className="mb-4">
                        <label
                          htmlFor="tour_maxgroupsize"
                          className="form-label"
                        >
                          Max Group Size
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="tour_maxgroupsize"
                          required
                          value={maxGroupSize}
                          onChange={(e) => setMaxGroupSize(e.target.value)}
                        />
                      </div>
                      {/* maxGroupSize end */}
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
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditTourMain;

