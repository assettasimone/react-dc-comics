export default function FeatureCard(props) {
    return (
        <div id="card" className="flex items-center flex-1">
            <img src={props.imgsrc} alt={props.text} className='h-14 mr-4' />
            <span className="font-medium text-white uppercase ">{props.text}</span>
        </div>
    )
}