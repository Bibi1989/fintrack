import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const VerifyPassword = lazy(() => import("./pages/VerifyPassword"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Error = lazy(() => import("./pages/Error"));
const ProfilePage = lazy(() => import("./pages/profile"));
const Signup = lazy(() => import("./pages/Signup"));
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));

const Root = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/verifypassword" component={VerifyPassword} />
          <Route exact path="/create-profile" component={ProfilePage} />
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="/dashboard" component={DashBoardPage}></Route>
          <Route component={Error} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Root;
