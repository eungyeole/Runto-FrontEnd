import React,{useState} from 'react';
function GListCard() {
    const [state,setState]=useState("none");
    const [color,setColor]=useState("white");
    function showclose(){
        if(state=="none"){
            setState("block");
            setColor("checked");
        }
        else{
            setState("none");
            setColor(null);
        }
    }
    return (
        <li>
            <div onClick={showclose} className={"text-header "+color}>
                <div className="thumb">
                    <img></img>
                </div>
                <div className="text-area">
                    <div className="text-info">
                        <div className="list-header">
                            <div className="list-title">아이유를 사랑하는모임</div>
                            <div className="list-max">3/6</div>
                        </div>
                        <div className="list-desc">아이유 정말 이쁜것같아요 그렇지않나요?</div>
                    </div>
                </div>
            </div>
            <div className="text-bottom" style={{display:state}}>
                <div className="desc-header">아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말
                    이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?
                    아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말
                    이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?
                    아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말
                    이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?
                    아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말
                    이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?
                    아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말
                    이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?아이유 정말 이쁜것같아요 그렇지않나요?
                    </div>
                <div className="desc-bottom">
                    <div className="max-per">모집정원 : <b>3/6</b></div>
                    <div className="desc-button">가입신청</div>
                </div>
            </div>
        </li>
    );
}

export default GListCard;
