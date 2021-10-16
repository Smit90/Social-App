import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topBar/TopBar"
import "./profile.css"

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpeg" />
                        <img className="profileUserImg" src="assets/person/7.jpeg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sam Curren</h4>
                            <span className="profileInfoDesc">This is test desc</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
