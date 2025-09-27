export default function FooterNavElements({ position, menu }) {

    const columnPosition = position

    const navInColumn = menu.filter(item => item.position === columnPosition)

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

