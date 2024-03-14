// import Logo from "";
import "../Header/Header.scss";
import Logo from "../../assets/Images/Spinder (2) (1).png";

export default function header() {
  return (
    <>
      <header className="header">
        <div className="header__div">
          <img src={Logo} alt="logo" className="header__img" />

          <p></p>
          <p></p>
        </div>
      </header>
    </>
  );
}
