import digitalIcon from '../assets/img/buy-comics-digital-comics.png'
import merchIcon from '../assets/img/buy-comics-merchandise.png'
import locatorIcon from '../assets/img/buy-comics-shop-locator.png'
import subIcon from '../assets/img/buy-comics-subscriptions.png'
import visaIcon from '../assets/img/buy-dc-power-visa.svg'

import FeaturedCard from '../components/FeatureCard'
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

                <div id='footer-link' className=''>

                </div>
                <div></div>
            </section>
        </footer>
    )
}