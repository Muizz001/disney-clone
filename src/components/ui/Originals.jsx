import "./recommended.css"
import { Link } from "react-router-dom"
import { selectOriginal } from "../../features/movie/movieSlice"
import { useSelector } from "react-redux"
import Loader from "./Loader"

const Originals = () => {
    const movies = useSelector(selectOriginal)
    return (
        <div className="reco-container">
            <h4>Originals</h4>
            <div className="reco-content">
            {
                    movies && movies.map((movie, key) => (
                        <div className="reco-wrap" key={key}>
                            <Link to={"/detail/" + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                                <div className="reco-text">
                                    <h4>{movie.title}</h4>
                                    <small>{movie.subTitle}</small>
                                </div>
                            </Link>
                        </div>
                    ))
                }

                {!movies && <Loader />}
            </div>
        </div>
    )
}

export default Originals