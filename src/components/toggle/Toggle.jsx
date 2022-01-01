import './toggle.css';
import Light from "../../img/light.png";
import Dark from "../../img/dark.png";

function Toggle() {
    return (
        <div className='t'>
            <img src={Light} alt="" className="t-icon" />
            <img src={Dark} alt="" className="t-icon" />
            <div className="t-button"></div>
        </div>
    )
}

export default Toggle
