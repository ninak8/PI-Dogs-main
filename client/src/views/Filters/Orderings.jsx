import React from "react";
import { useDispatch } from "react-redux";
import { orderByName, orderByWeight } from "../../Redux/Actions";
import style from "./Filters.module.css";

const Orderings = (props) => {
  const dispatch = useDispatch();

  //?----------------------------------------------------ORDERS

  const orderName = ["A-z", "Z-a"];

  const selectOrders = (e) => {
    const value = e.target.value;
    dispatch(orderByName(value));
    props.setIndexPage(0);
    props.setOrder(value);
  };

  //--------------------------------------------

  const orderWeight = ["weight min", "weight max"];

  const selectWeight = (e) => {
    const value = e.target.value;
    dispatch(orderByWeight(value));
    props.setIndexPage(0);
    props.setOrder(value);
  };

  return (
    <div className={style.content}>
      <h3 className={style.titles}>Order By...</h3>
      <div>
        <div className={style.label}>
          <label htmlFor=""> Alphabet </label>
        </div>
        <select
          name="selectOrders"
          id="selectOrders"
          className={style.select6}
          onChange={(e) => selectOrders(e)}
        >
          <option value="none"> Alphabet </option>
          {orderName.map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className={style.label}>
          <label htmlFor=""> Weights </label>
        </div>
        <select
          name="selectOrders"
          id="selectOrders"
          className={style.select5}
          onChange={(e) => selectWeight(e)}
        >
          <option value="none"> Weights </option>
          {orderWeight.map((elem) => (
            <option value={elem} key={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Orderings;
