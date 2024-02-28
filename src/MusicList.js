import { Link } from "react-router-dom";

// import MusicPlayer from "./MusicPlayer";

function MusicList() {
    return (
        <div>
            <ul>
                <li> <Link to='/musicplayer/1'> MusicPlayer 1</Link> </li>
                <li> <Link to='/musicplayer/2'> MusicPlayer 2</Link> </li>
            </ul>
        </div>
    )
}

export default MusicList;