import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import "./style.scss";

const Main = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="wrapper">
      <div>
        <div className="navbar">
          <img
            width={60}
            height={40}
            src="https://freepngimg.com/thumb/hyundai/37678-1-hyundai-logo-transparent.png"
            alt="logo"
          />
          <p onClick={() => navigate("/")}>Hyundai Auto Asia</p>
        </div>
        {!(pathname.length > 1) && (
          <div className="model">
            <div
              className="head"
              style={{ borderBottom: isExpanded ? "" : "1px" }}
              onClick={() => setIsExpanded((p) => !p)}
            >
              <p>Модельный ряд</p>
              <img
                width={16}
                height={16}
                src={
                  isExpanded
                    ? "https://www.svgrepo.com/show/93813/up-arrow.svg"
                    : "https://www.svgrepo.com/show/80156/down-arrow.svg"
                }
                alt="down"
              />
            </div>
            {isExpanded && (
              <div className="body">
                <p onClick={() => navigate("car_info?id=1")}>i30</p>
                <p onClick={() => navigate("car_info?id=2")}>Elantra</p>
                <p onClick={() => navigate("car_info?id=3")}>Sonata</p>
                <p onClick={() => navigate("car_info?id=4")}>Solaris</p>
              </div>
            )}
          </div>
        )}
        <Outlet />
        <ul className="btns">
          {pathname.length > 1 ? (
            <PrimaryButton
              style={{
                fontWeight: pathname.includes("test_drive") ? 600 : 300
              }}
              onClick={() => navigate("/")}
              title="Go back"
            />
          ) : (
            <>
              <PrimaryButton
                style={{
                  fontWeight: pathname.includes("trade_in") ? 600 : 300
                }}
                onClick={() => navigate("trade_in")}
                title="Trade IN"
              />
              <PrimaryButton
                style={{ fontWeight: pathname.includes("stocks") ? 600 : 300 }}
                onClick={() => navigate("stocks")}
                title="Stocks"
              />
              <PrimaryButton
                style={{
                  fontWeight: pathname.includes("test_drive") ? 600 : 300
                }}
                onClick={() => navigate("test_drive")}
                title="Test drive"
              />
            </>
          )}
        </ul>
      </div>
      <div className="footer">
        <p>Hyundai corp.</p>
        <p>All rights reserved &copy; 2022</p>
      </div>
    </div>
  );
};

export default Main;
