import React from "react";
import Card from "../Card/Card.jsx";
import style from "./ContentCards.module.css";

const ContentCards = (props) => {
  return (
    <div>
      <div className={style.cards}>
        {props.countRaces.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            img={elem.img}
            name={elem.name}
            race={elem.race}
            Temperaments={elem.Temperament}
            weight_max={elem.weight_max}
            weight_min={elem.weight_min}
            height_max={elem.height_max}
            height_min={elem.height_min}
            life_span={elem.life_span}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCards;
