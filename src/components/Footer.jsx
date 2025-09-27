import digitalIcon from '../assets/img/buy-comics-digital-comics.png'
import merchIcon from '../assets/img/buy-comics-merchandise.png'
import locatorIcon from '../assets/img/buy-comics-shop-locator.png'
import subIcon from '../assets/img/buy-comics-subscriptions.png'
import visaIcon from '../assets/img/buy-dc-power-visa.svg'
import footerBg from '../assets/img/footer-bg.jpg'
import dc_logo_bg from '../assets/img/dc-logo-bg.png'

import FeaturedCard from '../components/FeatureCard'
import FooterNavColumn from '../components/FooterNavColumn'
import FooterSocial from './FooterSocial'

export default function Footer({ menu, columns }) {

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
                    <FooterNavColumn menu={menu} columns={columns} />
                </section>
            </nav>


            <FooterSocial />

        </footer >
    )
}