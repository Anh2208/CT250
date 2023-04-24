import {
    BOOKING_DELIVERED_FAIL,
    BOOKING_DELIVERED_REQUEST,
    BOOKING_DELIVERED_RESET,
    BOOKING_DELIVERED_SUCCESS,
    BOOKING_DETAILS_FAIL,
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_LIST_FAIL,
    BOOKING_LIST_REQUEST,
    BOOKING_LIST_SUCCESS,
  } from "../Constants/BookingConstants";
  
  export const bookingListReducer = (state = { booking: [] }, action) => {
    switch (action.type) {
      case BOOKING_LIST_REQUEST:
        return { loading: true, booking: [] , };
      case BOOKING_LIST_SUCCESS:
        return { loading: false, booking: action.payload };
      case BOOKING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // BOOKING DETAILS
  export const bookingDetailsReducer = (
    state = { loading: true, tourItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case BOOKING_DETAILS_REQUEST:
        return { ...state, loading: true };
      case BOOKING_DETAILS_SUCCESS:
        return { loading: false, tour: action.payload };
      case BOOKING_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // BOOKING DELIVERED
  export const bookingDeliveredReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOKING_DELIVERED_REQUEST:
        return { loading: true };
      case BOOKING_DELIVERED_SUCCESS:
        return { loading: false, success: true };
      case BOOKING_DELIVERED_FAIL:
        return { loading: false, error: action.payload };
      case BOOKING_DELIVERED_RESET:
        return {};
      default:
        return state;
    }
  };
  