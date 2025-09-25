import comics from "../data/comics"


export default function Main() {
    return (
        <>
            <main className="bg-stone-900">
                <div className="container py-10">
                    <div class="grid grid-cols-6 gap-5">
                        {comics.map(item => (
                            <div id="card" className="">
                                <div style={{ backgroundImage: `url(${item.thumb})` }} className="w-full h-48 bg-cover" ></div>
                                <h3 className="text-white uppercase text-sm py-4">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
        </>
    )
}