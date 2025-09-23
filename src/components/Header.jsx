import logo from "../assets/img/dc-logo.png"
import MainNavBtn from "./MainNavBtn"



export default function Header() {
    return (
        <header className="container flex justify-between py-6">

            <img src={logo} alt="dc-logo" className="w-22 h-22" />

            <MainNavBtn />



        </header >
    )
}