import React,{useState} from 'react';
function MyRoomCard() {
    return (
        <li onClick={()=>window.location.href="/study/아이유"}>
            <div className="room-header">
                <div style={{display:"flex", alignItems:"center"}}>
                    <div className="thumb">
                        <img></img>
                    </div>
                    <div className="room-area">
                        <div className="room-info">
                            <div className="rlist-header">
                                <div className="rlist-title">아이유를 사랑하는모임</div>
                                <div className="rlist-num">99</div>
                            </div>
                            <div className="rlist-last">아이유 정말 이쁜것같아요 그렇지않나요?</div>
                        </div>
                    </div>
                </div>
                <div className="rlist-mamount">99+</div>
            </div>
        </li>
    );
}

export default MyRoomCard;
