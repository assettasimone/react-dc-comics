import logo from '../assets/img/dc-logo.png'
import MainNavBtn from '../components/MainNavBtn'


export default function Header({ link }) {
    return (
        <header className="container flex justify-between min-h-24">

            <img src={logo} alt="dc-logo" className="w-20 h-20 my-auto" />

            <MainNavBtn link={link} />



        </header >
    )
}