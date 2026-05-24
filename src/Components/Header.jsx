import Hestia from "../assets/baker.png";
export default function Header () {
    return (
        <header>
            <img src={Hestia} alt="Baker Icon" className="header-image"/>
            <h1>Chef Hestia</h1>
        </header>
    )
}