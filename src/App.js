import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

import Home from "./screens/Home"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import TestScreen from "./screens/TestScreen"
import ResetPassword from "./screens/ResetPassword"
import TermsAndConditions from "./screens/TermsAndConditions"
import Contact from "./screens/Contact"
import Profile from "./screens/Profile"
import SecuritySettings from "./screens/SecuritySettings"
import KycVerification from "./screens/KycVerification"
import BasicInformation from "./screens/BasicInformation"
import AssetsOverview from "./screens/AssetsOverview"
import MainAccount from "./screens/MainAccount"
import TradingAccount from "./screens/TradingAccount"
import Deposit from "./screens/Deposit"
import Withdraw from "./screens/Withdraw"
import History from "./screens/History"
import ErrorPage from "./screens/404"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/test" component={TestScreen} />
        <Route exact path="/terms-of-use" component={TermsAndConditions} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Profile} />
        <Route exact path="/account/security-settings" component={SecuritySettings} />
        <Route exact path="/account/kyc-verification" component={KycVerification} />
        <Route exact path="/account/basic-info" component={BasicInformation} />
        <Route exact path="/assets" component={AssetsOverview} />
        <Route exact path="/assets/main-account" component={MainAccount} />
        <Route exact path="/assets/trading-account" component={TradingAccount} />
        <Route exact path="/assets/coin" component={Deposit} />
        <Route exact path="/assets/withdraw" component={Withdraw} />
        <Route exact path="/assets/record" component={History} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App;