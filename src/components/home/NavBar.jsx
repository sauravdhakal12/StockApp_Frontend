import PropTypes from "prop-types";

const NavBarMenu = (props) => {
  const setActiveWindow = props.setActiveWindow;
  const availableWindows = props.availableWindows;
  const userEmail = props.userEmail;

  // Chnages view(component based on selected active window)
  const changeActiveWindow = (event) => {
    event.preventDefault();
    setActiveWindow(availableWindows.indexOf(event.target.innerHTML));
  }

  return (
    <div style={{ borderBottom: "1px solid lightgrey", padding: 10, textAlign: "right" }}>
      <div style={{ float: "left", clear: "both" }}>
        <a href="" style={{ margin: "0 20px 0 0", textDecoration: "none" }} onClick={changeActiveWindow}>Home</a>
        <a href="" style={{ margin: "0 20px 0 0", textDecoration: "none" }} onClick={changeActiveWindow}>Add</a>
      </div>

      <div>
        <b style={{ marginRight: 20, textDecoration: "underline" }}> {userEmail} </b>
        <a style={{ border: "1px solid black", borderRadius: 20, padding: 5, color: "white", backgroundColor: "black", textDecoration: "none" }} href="">logout</a>
      </div>
    </div>
  );
}

NavBarMenu.propTypes = {
  setActiveWindow: PropTypes.func,
  availableWindows: PropTypes.array,
  userEmail: PropTypes.string,
};

export default NavBarMenu;