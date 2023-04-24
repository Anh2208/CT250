import {
  TOUR_CREATE_FAIL,
  TOUR_CREATE_REQUEST,
  TOUR_CREATE_SUCCESS,
  TOUR_DELETE_FAIL,
  TOUR_DELETE_REQUEST,
  TOUR_DELETE_SUCCESS,
  TOUR_EDIT_FAIL,
  TOUR_EDIT_REQUEST,
  TOUR_EDIT_SUCCESS,
  TOUR_LIST_FAIL,
  TOUR_LIST_REQUEST,
  TOUR_LIST_SUCCESS,
  TOUR_UPDATE_FAIL,
  TOUR_UPDATE_REQUEST,
  TOUR_UPDATE_SUCCESS,
} from "../Constants/TourConstants";
import axios from "axios";
import { logout } from "./userActions";
import { URL } from "../Url";
// import Toast from "../../components/LoadingError/Toast";
import { toast } from "react-toastify";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
export const listTours = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TOUR_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // const { data } = await axios.get(`${URL}/api/v1/tours/alltour`, config);
    const { data } = await axios.get(
      `${URL}/api/v1/tours/dashboard/alltour`,
      config
    );
    const toursList = data.tours;
    // console.log("tour list")
    // console.log(data)
    // console.log(data)
    dispatch({ type: TOUR_LIST_SUCCESS, payload: toursList });
  } catch (error) {
    const message =
      error.response && error.response.toursList.message
        ? error.response.toursList.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: TOUR_LIST_FAIL,
      payload: message,
    });
  }
};

// DELETE TOUR
export const deleteTours = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TOUR_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${URL}/api/v1/tours/${id}`, config);

    dispatch({ type: TOUR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: TOUR_DELETE_FAIL,
      payload: message,
    });
  }
};

// CREATE TOUR
export const createTours =
  (title, city, address, photo, desc, price, maxGroupSize) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: TOUR_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/tours/`,
        { title, city, address, photo, desc, price, maxGroupSize },
        config
      );
      // alert(data)
      dispatch({ type: TOUR_CREATE_SUCCESS, payload: data });
      toast.success("Tours Added Success", ToastObjects);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: TOUR_CREATE_FAIL,
        payload: message,
      });
    }
  };

// EDIT TOUR
export const editTours = (id) => async (dispatch) => {
  try {
    dispatch({ type: TOUR_EDIT_REQUEST });
    const { data } = await axios.get(
      `${URL}/api/v1/tours/dashboard/singletour/${id}`
    );
    dispatch({ type: TOUR_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: TOUR_EDIT_FAIL,
      payload: message,
    });
  }
};

// UPDATE TOUR
export const updateTours = (tour) => async (dispatch, getState) => {
  try {
    alert("update Tourss");
    dispatch({ type: TOUR_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/v1/tours/${tour._id}`,
      tour,
      config
    );

    dispatch({ type: TOUR_UPDATE_SUCCESS, payload: data });
    dispatch({ type: TOUR_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: TOUR_UPDATE_FAIL,
      payload: message,
    });
  }
};
