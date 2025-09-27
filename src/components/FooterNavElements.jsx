import footerNavs from "../data/nav";

export default function FooterNavElements(props) {

    const columnPosition = props.position

    const navInColumn = footerNavs.filter(item => item.position === columnPosition)

    return (
        <>
            {navInColumn.map(nav => (
                <>
                    <h4 className='uppercase font-medium w-fit text-white mb-4'>{nav.header}</h4>
                    <ul key={nav.id} className='text-zinc-500 text-sm mb-4'>
                        {
                            nav.items.map(link => (<li key={link.id} className='hover:text-dc-blue'><a href={link.url}>{link.text}</a></li>))
                        }

                    </ul>
                </>
            ))}



        </>

    )


}




/*  <ul className='text-zinc-500 text-sm mb-4'>
                <li className='hover:text-dc-blue'><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
            </ul> */