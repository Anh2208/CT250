import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from "./Reducers/userReducers";
// import {
//   orderDeliveredReducer,
//   orderDetailsReducer,
//   orderListReducer,
// } from "./Reducers/OrderReducres";
import {
  tourUpdateReducer,
  tourListReducer,
  tourCreateReducer,
  tourEditReducer,
  tourDeleteReducer,
} from "./Reducers/TourReducres";
import { bookingListReducer, bookingDetailsReducer, bookingDeliveredReducer } from "./Reducers/BookingReducres";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  tourList: tourListReducer,
  tourDelete: tourDeleteReducer,
  tourCreate: tourCreateReducer,
  tourEdit: tourEditReducer,
  tourUpdate: tourUpdateReducer,
  // orderList: orderListReducer,
  // orderDetails: orderDetailsReducer,
  // orderDeliver: orderDeliveredReducer,
  bookingList: bookingListReducer,
  booingDetails: bookingDetailsReducer,
  bookingDeliver: bookingDeliveredReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
