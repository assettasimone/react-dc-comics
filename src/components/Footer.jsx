import digitalIcon from '../assets/img/buy-comics-digital-comics.png'
import merchIcon from '../assets/img/buy-comics-merchandise.png'
import locatorIcon from '../assets/img/buy-comics-shop-locator.png'
import subIcon from '../assets/img/buy-comics-subscriptions.png'
import visaIcon from '../assets/img/buy-dc-power-visa.svg'
import facebook from '../assets/img/footer-facebook.png'
import periscope from '../assets/img/footer-periscope.png'
import pinterest from '../assets/img/footer-pinterest.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import footerBg from '../assets/img/footer-bg.jpg'
import dc_logo_bg from '../assets/img/dc-logo-bg.png'

import FeaturedCard from '../components/FeatureCard'
import FooterNavColumn from '../components/FooterNavColumn'

export default function Footer() {

    return (

        <footer>
            <section className="bg-dc-blue">
                <div id="row" className="container py-10 flex justify-around">
                    <FeaturedCard text="digital comics" imgsrc={digitalIcon} />
                    <FeaturedCard text="dc merchandaise" imgsrc={merchIcon} />
                    <FeaturedCard text="subscription" imgsrc={subIcon} />
                    <FeaturedCard text="comic shop locator" imgsrc={locatorIcon} />
                    <FeaturedCard text="dc power" imgsrc={visaIcon} />
                </div>
            </section>
            <nav
                id="footer-link"
                className="py-20 flex w-full"
                style={{
                    backgroundImage: `url("${dc_logo_bg}"), url("${footerBg}")`,
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition: "right, bottom",
                    backgroundSize: "800px, cover"
                }}
            >

                <section id="row " className='container flex'>
                    <FooterNavColumn />
                </section>
            </nav>
            <section id="footer-social" className='bg-neutral-800' >
                <div className='container py-4 flex justify-between'>
                    <a href="#" className='p-4 text-white'>sign-up now!</a>
                    <div id='follow-us' className='flex items-center '>
                        <span className='text-dc-blue font-bold uppercase mr-4 '>Follow Us</span>
                        <ul id="social-link" className='flex gap-3'>
                            <li><img src={facebook} alt="" /></li>
                            <li><img src={periscope} alt="" /></li>
                            <li><img src={twitter} alt="" /></li>
                            <li><img src={youtube} alt="" /></li>
                            <li><img src={pinterest} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>

        </footer >
    )
}