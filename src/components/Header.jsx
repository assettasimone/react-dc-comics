import logo from "../assets/img/dc-logo.png"

export default function Header() {
    return (
        <header className="container flex justify-between py-6">

            <img src={logo} alt="dc-logo" className="w-22 h-22" />
            <nav>
                <ul className="h-full flex justify-items-center">
                    <li className="px-4 content-center">characters</li>
                    <li className="px-4 content-center">comics</li>
                    <li className="px-4 content-center">movies</li>
                    <li className="px-4 content-center">tv</li>
                    <li className="px-4 content-center">games</li>
                    <li className="px-4 content-center">collectibles</li>
                    <li className="px-4 content-center">videos</li>
                    <li className="px-4 content-center">fans</li>
                    <li className="px-4 content-center">news</li>
                    <li className="px-4 content-center">shop</li>
                </ul>
            </nav>


        </header>
    )
}