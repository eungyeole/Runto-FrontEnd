import React,{useEffect, useState} from "react"
import Roomcard from "./RoomCard"
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
function Room({roomid}){
    const [files,setFiles]=useState(null);
    const [name,setName]=useState(null);
    const [css,setCss]=useState("");
    const [checked,setChecked]=useState(false);
    function filehandler(e){
        setFiles(e.target.files[0]);
        setName(e.target.files[0].name);
        console.log(e.target.files[0].name);
    }
    function menuhandler(e){
        setChecked(e.target.checked);
        console.log("sdsdd");
        if(e.target.checked){
            setCss("-checked");
        }
        else{
            setCss("");
        }
    }
    console.log(checked);
    return(
        <div className="chatRoom">
            <div className="chatHeader">
                <i onClick={()=>window.location.href="/study/아이유"} className="fas fa-arrow-left"></i>
                <div>{roomid}</div>
                <i className="fas fa-bars"></i>
            </div>
            <ul className={"chatList" + css}>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
                <Roomcard></Roomcard>
            </ul>
            <form className="chatBottom">
                <label>
                    <input checked={checked} onChange={menuhandler} type="checkbox"></input>
                    <i className="fas fa-plus"></i>
                </label>
                <input onClick={()=>{setChecked(false); setCss("")}} value={name} placeholder="메세지를 입력해주세요..."></input>
                <button type="submit"><i className="fas fa-pencil-alt"></i></button>
            </form>
            <div className={"chatMenu" + css}>
                <div className="chatWrapper">
                    <label>
                        <i className="far fa-file-alt"></i>
                        <input onChange={filehandler} type="file"></input>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Room;