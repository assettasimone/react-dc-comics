const content = [
    {
        id: 1,
        text: 'characters',
        link: '#',
        is_active: true
    },
    {
        id: 2,
        text: 'comics',
        link: '#',
        is_active: true
    },
    {
        id: 3,
        text: 'movies',
        link: '#',
        is_active: true
    },
    {
        id: 4,
        text: 'tv',
        link: '#',
        is_active: true
    },
    {
        id: 5,
        text: 'games',
        link: '#',
        is_active: true
    },
    {
        id: 6,
        text: 'collectibles',
        link: '#',
        is_active: true
    },
    {
        id: 7,
        text: 'video',
        link: '#',
        is_active: true
    },
    {
        id: 8,
        text: 'fans',
        link: '#',
        is_active: true
    },
    {
        id: 9,
        text: 'news',
        link: '#',
        is_active: true
    },
    {
        id: 10,
        text: 'shop',
        link: '#',
        is_active: true
    }
]

export default function MainNavBtn() {

    return (

        <nav>
            <ul className="h-full flex justify-items-center">
                {content.map((item, index) => (
                    <li key={index} className="px-4 text-sm font-medium content-center border-b-4 uppercase border-b-white text- hover:border-b-dc-blue hover:text-dc-blue" ><a href={item.link}>{item.text}</a></li>
                ))}
            </ul>
        </nav >
    )
}