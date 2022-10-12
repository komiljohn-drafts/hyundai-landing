import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fakeData from "./fakeData";
import "./style.scss";

const CarInfo = () => {
  const [searchParams] = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const data = useMemo(
    () => fakeData.find((i) => i.key === searchParams.get("id")),
    [searchParams]
  );

  return (
    <div className="container">
      <div className="car_info">
        <img width={450} height={300} src={data.imgUrl} alt="car" />
        <div className="car_info__text">
          <p className="title">{data.title}</p>
          <p>Объем двигателя: {data.capacity}</p>
          <p>Макс. мощность: {data.power}</p>
          <p>Расход топлива: {data.wastage}</p>
        </div>
      </div>
      <div className="complectation">
        <div
          className="head"
          onClick={() => setIsExpanded((p) => !p)}
          style={{ borderBottom: isExpanded ? "" : "1px" }}
        >
          <p>Комплектации</p>
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
            {data.prices.map((i) => (
              <p key={i.tariff}>{`${i.tariff} - ${i.price}`}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarInfo;
