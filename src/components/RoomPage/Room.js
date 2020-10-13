import React from "react"
function Room({roomid}){
    return(
        <div className="chatRoom">
            <div className="chatHeader">
                <i className="fas fa-chevron-circle-left"></i>
                <div>{roomid}</div>
                <i class="fas fa-bars"></i>
            </div>
            <ul className="chatList">
                <li>테스트</li>
            </ul>
            <form className="chatBottom">
                <div><i class="fas fa-plus"></i></div>
                <input placeholder="메세지를 입력해주세요..."></input>
                <button type="submit"><i class="fas fa-pencil-alt"></i></button>
            </form>
        </div>
    )
}
export default Room;