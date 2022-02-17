import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//SCREENS
import HomeLogin from './screens/homeLogin/homeLogin';
import HandleAccount from './screens/handleAccount/App';

export default function RouterFile() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomeLogin />} />
            <Route exact path="/account" element={<HandleAccount />} />
        </Routes>
    </Router>
  );
}