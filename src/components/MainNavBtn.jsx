const content = ["characters", "comics", "movies", "tv", "games", "collectibles", "video", "fans", "news", "shop"]

export default function MainNavBtn() {

    return (

        <nav>
            <ul className="h-full flex justify-items-center">
                {content.map((item, index) => (

                    <li key={index} className="px-4 text-sm font-medium content-center border-b-4 uppercase border-b-white text- hover:border-b-dc-blue hover:text-dc-blue" ><a href="#"> {item}</a></li>
                ))}
            </ul>
        </nav >
    )
}