import { Routes, Route, BrowserRouter } from "react-router-dom";
import CarInfo from "../pages/CarInfo";
import Main from "../pages/Main";
import TestDrive from "../pages/TestDrive";
import TradeIN from "../pages/TradeIN";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="trade_in" element={<TradeIN />} />
          <Route path="stocks" element={<TradeIN />} />
          <Route path="test_drive" element={<TestDrive />} />
          <Route path="test_drive" element={<TestDrive />} />
          <Route path="car_info" element={<CarInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
