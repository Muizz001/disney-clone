import "./detail.css"
import { useParams } from "react-router"
import { useState } from "react"
import { useEffect } from "react"
import db from "../base"
import { doc, getDoc } from "firebase/firestore"

const Detail = () => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({})
    useEffect(() => {
        async function get() {
            const docRef = doc(db, "movies", id)
            const docSnap = await getDoc(docRef).catch(error => {
                console.log("Error", error);
            })
            if (docSnap.exists) {
                setDetailData(docSnap.data())
            } else {
                console.log("No such document in firebase");
            }
        }
        get()
    }, [id])

    return (
        <div className="detail-container">
            <div className="detail-background">
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </div>
            <div className="image-title">
                <img src={detailData.titleImg} alt={detailData.title} />
            </div>
            <div className="content-meta">
                <div className="controls">
                    <button className="player">
                        <img src="/images/play-icon-black.png" />
                        <span>Play</span>
                    </button>
                    <button className="trailer player">
                        <img src="/images/play-icon-white.png" />
                        <span>Trailer</span>
                    </button>
                    <div className="add-list">
                        <span />
                        <span />
                    </div>
                    <div className="group-watch">
                        <div>
                            <img src="/images/group-icon.png" />
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    {detailData.subTitle}
                </div>
                <div className="detail-description">
                    {detailData.description}
                </div>
            </div>

        </div>
    )
}

export default Detail