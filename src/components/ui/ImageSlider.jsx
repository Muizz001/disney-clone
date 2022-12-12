import "./imageslider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Slider className="slider" {...settings}>
            <div className="wrap">
                <a>
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </div>
            <div className="wrap">
                <a>
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </div>
            <div className="wrap">
                <a>
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </div>
            <div className="wrap">
                <a>
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </div>

        </Slider>
    )
}

export default ImageSlider