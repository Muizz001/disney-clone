import { auth } from "../base.js"
import { onAuthStateChanged } from "firebase/auth"
import "./header.css"
import { getUserName, setUserLoginDetails, getUserPhoto, setSignOut } from "../features/user/userSclice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userName = useSelector(getUserName)
    const userPhoto = useSelector(getUserPhoto)
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                navigate("/home")
            }
        })

    }, [userName])

    const setUser = user => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    const handleAuth = async () => {
        if (!userName) {
            signInWithPopup(auth, new GoogleAuthProvider())
                .then(result => {
                    setUser(result.user);
                })
                .catch(error => alert(error.message))
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOut())
                navigate("/")
            }).catch(error => alert(error.message))
        }
    }

    return (
        <nav>
            <a className="logo">
                <img src="/images/logo.svg" alt="Disney" />
            </a>
            {!userName ?
                <a className="login" onClick={handleAuth}>LOGIN</a>
                :
                <>
                    <div className="nav-menu">
                        <a className="link">
                            <img className="icon" src="/images/home-icon.svg" alt="" />
                            <span className="link-text">HOME</span>
                        </a>
                        <a className="link">
                            <img className="icon" src="/images/search-icon.svg" alt="" />
                            <span className="link-text">SEARCH</span>
                        </a>
                        <a className="link">
                            <img className="icon" src="/images/watchlist-icon.svg" alt="" />
                            <span className="link-text">WATCHLIST</span>
                        </a>
                        <a className="link">
                            <img className="icon" src="/images/original-icon.svg" alt="" />
                            <span className="link-text">ORIGINALS</span>
                        </a>
                        <a className="link">
                            <img className="icon" src="/images/movie-icon.svg" alt="" />
                            <span className="link-text">MOVIES</span>
                        </a>
                        <a className="link">
                            <img className="icon" src="/images/series-icon.svg" alt="" />
                            <span className="link-text">SERIES</span>
                        </a>
                    </div>
                    <div className="signout">
                        <img className="userimg" src={userPhoto} alt="user-img" />
                        <div className="dropdown">
                            <span onClick={handleAuth}>Sign out</span>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
}

export default Header