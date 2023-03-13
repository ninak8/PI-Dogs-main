import React from "react";
import ContentCards from "../../components/ContentCards/ContentCards.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import Pages from "../paginated/Pages.jsx";
import Loader from "../../components/loader/loader.jsx";
import Filters from "../Filters/Filters.jsx";
import Orderings from "../Filters/Orderings.jsx";
import { getRaces, getTemperaments } from "../../Redux/Actions";

const Home = (props) => {
  const races = useSelector((state) => state.races);
  const temps = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  const [indexPage, setIndexPage] = useState(0);
  const [currDogs, setCurrDogs] = useState([]);
  const [order, setOrder] = useState("");

  let hasta = indexPage * 8 + 8;

  // ---------------------------------------------------------

  useEffect(() => {
    if (!races.length) {
      dispatch(getRaces());
    }
    if (!temps.length) {
      dispatch(getTemperaments());
    }
  }, [dispatch, races, temps, currDogs, hasta, indexPage]);
  //------------------------------------
  useEffect(() => {
    Array.isArray(races) &&
      setCurrDogs(() => races.slice(indexPage * 8, hasta)); //una parte del array desde/hasta
  }, [races, indexPage, hasta, order]);

  // ---------------------------------------------------------

  const prevPage = () => {
    if (indexPage === 0) return;
    setIndexPage((index) => index - 1);
    props.inputEvent(setIndexPage);
  };

  const nextPage = () => {
    hasta < races.length && setIndexPage((index) => index + 1);
  };

  return (
    <div className={style.home}>
      {!currDogs.length && <Loader />}
      <div className={style.left}>
        <div className={style.content}>
          <Filters races={races} setIndexPage={setIndexPage} temps={temps} />
        </div>
        <div className={style.contentOrders}>
          <Orderings setIndexPage={setIndexPage} setOrder={setOrder} />
        </div>
      </div>
      <div className={style.right}>
        <div>
          <Pages nextPage={nextPage} prevPage={prevPage} index={indexPage} />
        </div>
        <ContentCards countRaces={currDogs} />
      </div>
    </div>
  );
};

export default Home;
