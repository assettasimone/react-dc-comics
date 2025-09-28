export default function MainNavBtn({ link }) {


    return (

        <nav>
            {console.log(link)}
            <ul className="h-full flex justify-items-center">
                {link.map((item) => (
                    <li key={item.id} className="px-4 text-sm font-medium content-center border-b-4 uppercase border-b-white text- hover:border-b-dc-blue hover:text-dc-blue" ><a href={item.link}>{item.text}</a></li>
                ))}
            </ul>
        </nav >
    )
}