import { useLocation } from "react-router-dom";
import "./style.scss";

const TradeIN = () => {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <h2>Trade IN</h2>
      <img
        width="100%"
        height="100%"
        src={
          pathname.includes("stocks")
            ? "https://cdn.knoema.com/infographics/Knoema_Data_Driven_Global_Automotive_Industry_Overview.png"
            : "https://lh3.googleusercontent.com/2JAM45Pxd0lxdpVlueLCaWuslR7A6YCqcMgEBb7RDML6nmYVd9SGwG5GONO9WZE5Ucdo3NXEX2icowTHvkS8Pi8=w1280"
        }
        alt="cars"
      />
      <p>
        Хотите обновить автомобиль или продать выгодно и не теряя времени на
        поиски? Воспользуйтесь программой Trade-In от Hyundai. Подробности
        программы Trade-In узнавайте во всех дилерских центрах Hyundai в
        Ташкенте, а также по номеру единого call-центра 📞1248.⠀
      </p>
      <p>*Программа действительна для Ташкента.</p>
    </div>
  );
};

export default TradeIN;
