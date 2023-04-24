import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import tourScreen from "./screens/TourScreen";
import OrderScreen from "./screens/OrderScreen";
import AddTour from "./screens/AddTour";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import TourEditScreen from "./screens/TourEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
// import { listOrders } from "./Redux/Actions/OrderActions";
import { listBooking } from "./Redux/Actions/BookingActions";
import { listTours } from "./Redux/Actions/TourActions";


function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listTours());
      dispatch(listBooking());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
        
          <PrivateRouter path="/" component={HomeScreen} exact />
          {/* <PrivateRouter path="/products" component={tourScreen} /> */}
          <PrivateRouter path="/tours" component={tourScreen} />
          {/* <PrivateRouter path="/category" component={CategoriesScreen} /> */}
          <PrivateRouter path="/orders" component={OrderScreen} />
          {/* <PrivateRouter path="/addproduct" component={AddTour} /> */}
          <PrivateRouter path="/addtour" component={AddTour} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter
            path="/product/:id/edit"
            component={TourEditScreen}
          />
          <PrivateRouter
            path="/tour/:id/edit"
            component={TourEditScreen}
          />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
