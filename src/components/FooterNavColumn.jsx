import FooterNavElements from '../components/FooterNavElements'

export default function FooterNavColumn({ menu, columns }) {

    return (
        <>
            {columns.map(column => (
                <div id={`col-${column}`} className='mr-12'>
                    <FooterNavElements position={column} menu={menu} />
                </div>
            ))}
        </>
    )

}

