import FooterNavElements from '../components/FooterNavElements'
const navColumns = [1, 2, 3]


export default function FooterNavColumn() {

    return (
        <>
            {navColumns.map(column => (
                <div id={`col-${column}`} className='mr-12'>
                    <FooterNavElements position={column} />
                </div>
            ))}
        </>
    )

}

