import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage";
import Services, {
  Cloud,
  Training,
  Enterprise,
  IoT,
  Ecom,
  Website,
  Mobile,
} from "../pages/Services";
import Main from "./Main";

const RoutesManager = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route exact path={"/"} element={<Homepage />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/contact"} element={<Contact />} />
        <Route exact path={"/services"} element={<Services />}>
          <Route exact path={""} element={<Cloud />} />
          <Route exact path={"cloud"} element={<Cloud />} />
          <Route exact path={"training"} element={<Training />} />
          <Route exact path={"iot"} element={<IoT />} />
          <Route exact path={"enterprise"} element={<Enterprise />} />
          <Route exact path={"ecom"} element={<Ecom />} />
          <Route exact path={"mobile"} element={<Mobile />} />
          <Route exact path={"website"} element={<Website />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesManager;
