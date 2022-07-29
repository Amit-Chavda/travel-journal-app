

export default function Header() {

    let imageProps={
        height:"50px",
        width:"50px"
    }

    let headerProps={
        height:"50px",
        width:"100%",
        backgroundColor:"#FF8B8B",
        textAlign:"center",
        color:"white",
        fontSize:"20px",
        padding:"10px"
    }
    return(
        <div style={headerProps}>
            <p>
                My Travel Journal
            </p>
        </div>
    )

}