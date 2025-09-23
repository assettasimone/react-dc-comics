import iconDigital from '../assets/img/buy-comics-digital-comics.png'
export default function Footer() {

    return (

        <footer>
            <section className="bg-dc-blue">
                <div id="features" className="container py-10 flex justify-around">
                    <div id="feature-item" className="flex items-center flex-1">
                        <img src={iconDigital} alt="" className='h-14 mr-4' />
                        <span className="font-medium text-white uppercase ">digital comics</span>
                    </div>
                    <div id="feature-item" className="flex items-center flex-1">
                        <img src={iconDigital} alt="" className='h-14 mr-4' />
                        <span className="font-medium text-white uppercase ">digital comics</span>
                    </div>
                    <div id="feature-item" className="flex items-center flex-1">
                        <img src={iconDigital} alt="" className='h-14 mr-4' />
                        <span className="font-medium text-white uppercase ">digital comics</span>
                    </div>
                    <div id="feature-item" className="flex items-center flex-1">
                        <img src={iconDigital} alt="" className='h-14 mr-4' />
                        <span className="font-medium text-white uppercase ">digital comics</span>
                    </div>

                </div>

                <div></div>
                <div></div>
            </section>
        </footer>
    )
}