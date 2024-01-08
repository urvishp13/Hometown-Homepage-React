export default function Activity(props) {
    const { img, alt, title, desc } = props

    return (
        <div className="activity">
            <img className="activity__img" src={img} alt={alt}/>
            <h4 className="activity__title">{title}</h4>
            <p className="activity__desc">{desc}</p>
        </div>
    )
}