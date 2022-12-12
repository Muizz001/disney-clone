import { getUserName } from "../features/user/userSclice"
import "./home.css"
import ImageSlider from "./ui/ImageSlider"
import NewDisney from "./ui/NewDisney"
import Originals from "./ui/Originals"
import Recommended from "./ui/Recommended"
import Trending from "./ui/Trending"
import Viewers from "./ui/Viewers"
import { useSelector, useDispatch } from "react-redux"
import { useCallback, useEffect } from "react"
import { setMovies } from "../features/movie/movieSlice"
import { collection, getDocs } from "firebase/firestore"
import db from "../base.js"


const Home = () => {
    const dispatch = useDispatch()
    const userName = useSelector(getUserName)
    let recommends = []
    let newDisney = []
    let originals = []
    let trending = []

    const fetchData = useCallback(async () => {
        const query = await getDocs(collection(db, "movies"))
        query.forEach(doc => {
            switch (doc.data().type) {
                case "recommend":
                    if (recommends.length === 4) {
                        break
                    } else {
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                    }
                    break
                case "new":
                    if (originals.length === 4) {
                        break
                    } else {
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                    }
                    break
                case "original":
                    if (originals.length === 4) {
                        break
                    } else {
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                    }
                    break
                case "trending":
                    if (originals.length === 4) {
                        break
                    } else {
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                    }
                    break
            }
        })
        dispatch(
            setMovies({
                recommend: recommends,
                newDisney: newDisney,
                original: originals,
                trending: trending,
            })
        )

        return
    }, [])

    useEffect(() => {

        fetchData()
    }, [userName, fetchData])

    return (
        <div className="home-container">
            <ImageSlider />
            <Viewers />
            <Recommended />
            <NewDisney />
            <Originals />
            <Trending />
        </div>
    )
}

export default Home