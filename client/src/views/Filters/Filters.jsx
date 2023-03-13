import React from "react";
import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import {
  orderByTemperament,
  orderByRace,
  getRaces,
  filterAPI,
  filterDB,
  // pesoMin,
} from "../../Redux/Actions";

const Filters = (props) => {
  const dispatch = useDispatch();

  //?----------------------------------------------TEMPERAMENTS
  const selectTemperament = (e) => {
    const value = e.target.value;

    const searchTemp = props.races.filter((elem) =>
      elem.Temperament?.split(", ").find((e) => e === value)
    );
    if (searchTemp.length) {
      dispatch(orderByTemperament(searchTemp));
      props.setIndexPage(0);
    }
  };

  //?-----------------------------------------------------RACES

  const searchRace = props.races.map((elem) => {
    if (elem.race !== undefined) return elem.race;
  });
  const auxRaces = new Set(
    searchRace.filter((elem) => elem !== undefined && elem !== "")
  );
  let miarr = [];
  auxRaces.forEach((elem) => miarr.push(elem));
  // ---------------------------------------

  const selectRace = (e) => {
    const value = e.target.value;
    const getRaces = props.races.filter((elem) => elem.race === value);
    if (getRaces.length) {
      dispatch(orderByRace(getRaces));
      props.setIndexPage(0);
    }
  };

  //?---------------------------------------------------DBorAPI

  const origins = ["All", "DataBase", "Api"];

  const selectOrigin = (e) => {
    const value = e.target.value;

    //------------------------------------------
    if (value === "All") {
      dispatch(getRaces());
      props.setIndexPage(0);
    }

    //------------------------------------------
    else if (value === "DataBase") {
      const DB = props.races.filter((elem) => elem.createInDb === true);

      if (!DB.length) return alert("dog not found in database");
      else {
        dispatch(filterDB(DB));
        props.setIndexPage(0);
      }

      //------------------------------------------
    } else if (value === "Api") {
      const API = props.races.filter((elem) => elem.createInDb === false);

      if (!API.length) return alert("dog not found in Api");
      else {
        dispatch(filterAPI(API));
        props.setIndexPage(0);
      }
    }
  };

  //?---------------------------------------------------PESOMIN
  //* Boton que filtra // corrección pi

  // const pesomin = props.races.filter((elem) => elem.weight_max < 10);

  // const fun = (e) => {
  //   dispatch(pesoMin(pesomin));
  //   props.setIndexPage(0);
  // };

  //?----------------------------------------------------------

  return (
    <div className={style.content}>
      {/* <div className={style.contentButton}>
        <button onClick={fun} className={style.button}>
          -10
        </button>
      </div> */}

      <h3 className={style.titles}>Filter By...</h3>
      <div>
        <div className={style.label}>
          <label htmlFor="select">Temperaments</label>
        </div>
        <select
          name="selectTemps"
          className={style.select1}
          onChange={(e) => selectTemperament(e)}
        >
          <option value="none">Temperaments</option>
          {props.temps?.map((temp) => (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className={style.label}>
          <label htmlFor="select">Races</label>
        </div>
        <select
          name="selectRace"
          className={style.select2}
          onChange={(e) => selectRace(e)}
        >
          <option value="none"> Races</option>
          {miarr.map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className={style.label}>
          <label htmlFor="select"> Origin </label>
        </div>
        <select
          name="selectOrigin"
          className={style.select3}
          onChange={(e) => selectOrigin(e)}
        >
          <option value="none"> Origin </option>
          {origins.map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Filters;
