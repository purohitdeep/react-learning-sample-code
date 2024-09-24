import { React } from "react";
import HeaderCardButton from './HeaderCartButton';
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Foood</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious foood!" />
      </div>
    </>
  );
};

export default Header;
