import socialLink from '../data/socialLink'


export default function FooterSocial() {


    return (

        <section id="footer-social" className='bg-neutral-800' >
            <div className='container py-4 flex justify-between'>
                <a href="#" className='p-4 text-white'>sign-up now!</a>
                <div id='follow-us' className='flex items-center '>
                    <span className='text-dc-blue font-bold uppercase mr-4'>Follow Us</span>
                    <ul id="social-link" className='flex gap-3'>
                        {socialLink.map(link => (
                            <li key={link.id} className='hover:opacity-75'>
                                <a href={link.profileSrc}><img src={link.iconSrc} alt={link.name} /></a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    )
}