import comics from "../data/comics"
import heroImage from "../assets/img/jumbotron.jpg"


export default function Main() {
    return (
        <>
            {/* jumbotron section */}
            <div id="hero" className="w-full h-100 bg-cover bg-top " style={{ backgroundImage: `url(${heroImage})` }}>
            </div >
            <main className="bg-stone-900">

                <div className="container py-20">
                    <div id="collectionTitle" className="bg-dc-blue text-2xl p-4 w-fit mb-10 absolute -mt-28 uppercase font-medium text-white">current series</div>
                    {/* Product grid */}
                    <div class="grid grid-cols-6 gap-5">
                        {comics.map(item => (
                            <div id="card" className="">
                                <div style={{ backgroundImage: `url(${item.thumb})` }} className="w-full h-48 bg-cover" ></div>
                                <h3 className="text-white uppercase text-sm py-4">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button id="loadMore" className="bg-dc-blue text-white py-2 px-16 m-3 block w-fit mx-auto">load more</button>
                </div>
            </main >
        </>
    )
}