import {
    BOOKING_DELIVERED_FAIL,
    BOOKING_DELIVERED_REQUEST,
    BOOKING_DELIVERED_SUCCESS,
    BOOKING_DETAILS_FAIL,
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_LIST_FAIL,
    BOOKING_LIST_REQUEST,
    BOOKING_LIST_SUCCESS,
  } from "../Constants/BookingConstants";
  import { logout } from "./userActions";
  import axios from "axios";
  import { URL } from "../Url";
  
  export const listBooking = () => async (dispatch, getState) => {
    try {
      dispatch({ type: BOOKING_LIST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`${URL}/api/v1/booking`, config);
      // const toursList = data.tours;
      
      dispatch({ type: BOOKING_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: BOOKING_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  // BOOKING DETAILS
  export const getBookingDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: BOOKING_DETAILS_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`${URL}/api/booking/${id}`, config);
      dispatch({ type: BOOKING_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: BOOKING_DETAILS_FAIL,
        payload: message,
      });
    }
  };
  
  // BOOKING DELIVER
  export const deliverBooking = (booking) => async (dispatch, getState) => {
    try {
      dispatch({ type: BOOKING_DELIVERED_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `${URL}/api/booking/${booking._id}/delivered`,
        {},
        config
      );
      dispatch({ type: BOOKING_DELIVERED_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: BOOKING_DELIVERED_FAIL,
        payload: message,
      });
    }
  };
  