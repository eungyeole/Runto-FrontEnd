import React from "react"
import "./room.scss"
import Header from "./RoomHeader"
import Room from "./Room"
function RoomPage({match}){
    console.log(match.params.roomid);
    return(
        <>
            <div className="room">
                <Room roomid={match.params.roomid}></Room>
            </div>
        </>
    )
}
export default RoomPage;