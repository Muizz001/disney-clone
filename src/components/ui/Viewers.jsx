import "./viewers.css"

const Viewers = () => {
    return (
        <div className="viewers-container">
            <div className="viewers-wrap">
                <img src="/images/viewers-disney.png" />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="viewers-wrap">
                <img src="/images/viewers-marvel.png" />
                <video autoPlay loop muted playsInline >
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="viewers-wrap">
                <img src="/images/viewers-national.png" />
                <video autoPlay loop muted playsInline >
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="viewers-wrap">
                <img src="/images/viewers-pixar.png" />
                <video autoPlay loop muted playsInline >
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="viewers-wrap">
                <img src="/images/viewers-starwars.png" />
                <video autoPlay loop muted playsInline >
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Viewers