import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getByName } from "../../Redux/Actions.js";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const search = (event) => {
    setName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      dispatch(getByName(name));
      setName("");
    }
  };
  return (
    <div className={style.contentForm}>
      <form onSubmit={handlerSubmit}>
        <label htmlFor=""></label>
        <input
          className={style.inputSearch}
          type="text"
          placeholder="Search breed and name"
          value={name}
          onChange={search}
        />
        <input
          className={style.search}
          type="submit"
          value="Search"
          onClick={handlerSubmit}
        />
      </form>
    </div>
  );
};

export default SearchBar;
