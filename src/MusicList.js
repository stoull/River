import { Link } from "react-router-dom";

// import MusicPlayer from "./MusicPlayer";

function MusicList() {
    return (
        <div>
            <Link to='/musicplayer/1'> MusicPlayer 1</Link>
            <br />
            <Link to='/musicplayer/2'> MusicPlayer 2</Link>
        </div>
    )
}

export default MusicList;