import { Route, Routes } from "react-router-dom";

import Home from "./component/pages/home";
import Admin from "./component/pages/Admin";
import Contact from "./component/pages/Contact";
import Play from "./component/pages/Play";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
};

export default RouterApp;
