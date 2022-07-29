export default function Card(props) {
    let anchotStyle = { fontSize: "11px", color: "gray", marginLeft: "10px" }
    let paraStyle = { height: "100%", fontSize: "12px", textAlign: "justify" }

    return (
        <>
            <section className='FlexContainer'>
                <div className="div1">
                    <img src={props.item.image} />
                </div>
                <div className="div2">
                    <span>{props.item.country}</span>
                    <a style={anchotStyle} href="">Vew On Google Map</a>
                    <h2>{props.item.city}</h2>

                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>{props.item.from} - {props.item.to}</span>
                    <p style={paraStyle}>
                        {props.item.desc}
                    </p>
                </div>
            </section>
        </>
    )

}