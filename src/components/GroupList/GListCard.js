import React,{useState} from 'react';
function GListCard({props}) {
    const [state,setState]=useState("none");
    const [color,setColor]=useState("white");
    function showclose(){
        if(state==="none"){
            setState("block");
            setColor("checked");
        }
        else{
            setState("none");
            setColor(null);
        }
    }
    return (
        <li key={props.id}>
            <div onClick={showclose} className={"text-header "+color}>
                <div className="thumb">
                    <img></img>
                </div>
                <div className="text-area">
                    <div className="text-info">
                        <div className="list-header">
                            <div className="list-title">{props.name}</div>
                            <div className="list-max">1/{props.max_people}</div>
                        </div>
                        <div className="list-desc">{props.description}</div>
                    </div>
                </div>
            </div>
            <div className="text-bottom" style={{display:state}}>
                <div className="desc-header">{props.description}</div>
                <div className="desc-bottom">
                    <div className="max-per">모집정원 : <b>1/{props.max_people}</b></div>
                    <div className="desc-button">가입신청</div>
                </div>
            </div>
        </li>
    );
}

export default GListCard;
