
export default function Card(props) {

    console.log(props.item);
    return (
        <>
            <section className='FlexContainer'>
                <div className="div1">
                    <img src={props.item.image} />
                </div>
                <div className="div2">
                    <span>{props.item.country}</span>
                    <a style={{ fontSize: "11px", color: "gray", marginLeft: "10px" }} href="">Vew On Google Map</a>
                    <h2>{props.item.city}</h2>

                    <span style={{ fontSize: "14px" }}>{props.item.from} - {props.item.to}</span>
                    <p style={{ height: "100%", fontSize: "12px", textAlign: "justify" }}>
                    {props.item.desc}
                    </p>
                </div>
            </section>
        </>
    )

}