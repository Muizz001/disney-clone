import "./recommended.css"
import { Link } from "react-router-dom"
import { selectNewDisney } from "../../features/movie/movieSlice"
import { useSelector } from "react-redux"
import Loader from "./Loader"

const NewDisney = () => {

    const movies = useSelector(selectNewDisney)
    return (
        <div className="reco-container">
            <h4>New to Disney+</h4>
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

export default NewDisney