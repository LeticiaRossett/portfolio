import './toggle.css';
import Light from "../../img/light.png";
import Dark from "../../img/dark.png";
import { ThemeContext } from '../../context';
import { useContext } from "react";

function Toggle() {
    const theme = useContext(ThemeContext);
    function handleClick() {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className='t'>
            <img src={Light} alt="" className="t-icon" />
            <img src={Dark} alt="" className="t-icon" />
            <div
                className="t-button"
                onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}
            ></div>
        </div>
    )
}

export default Toggle
