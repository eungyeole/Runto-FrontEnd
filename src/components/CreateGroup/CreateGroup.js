import React, {useEffect, useState} from 'react';
import { CreateGroup } from "../../actions/userAction"
import { useDispatch, useSelector } from "react-redux";
import "./CreatePage.scss"
import CreateTitle from "./CreatTitle"
import CreateDesc from "./CreateDesc"
function CreatePage() {
    const [Page,setPage]=useState(0);
    const [Desc,setDesc]=useState("");
    const [Title,setTitle]=useState("");
    const [Max,setMax]=useState(1);
    const [Option,setOption]=useState("Public");
    const dispatch=useDispatch();
    const Prev=()=>{
        setPage(Page-1);
    }
    const handleRadio=(e)=> {
        setOption(e.target.value);
    }
    const maxhandler=(e)=>{
        setMax(e.target.value);
    }
    const createSubmit=()=>{
        let body={
            name: Title,
            description: Desc,
            max_people: Max,
            room_type: Option
        }
        console.log(body)
        dispatch(CreateGroup("",body))
            .then((res)=>{    
                alert("그룹이 생성 되었습니다.");
                window.location.href="/glist"
                
            })
            .catch((err)=>{
                alert(err);
                window.location.href="/glist"
            })
            
    }

    return (
        <>
            <header className="CreateHeader">
                {
                    Page==0 ?
                         <i onClick={()=>window.location.href="/glist"} className="fas fa-arrow-left" ></i>
                    :<i onClick={Prev} className="fas fa-arrow-left" ></i>
                }
            </header>
            <div className="CreatePage">
                {
                    Page==0 ?
                        <CreateTitle setPage={setPage} Title={Title} setTitle={setTitle}></CreateTitle>
                    :Page==1 ?
                        <CreateDesc setPage={setPage} Desc={Desc} setDesc={setDesc}></CreateDesc>
                    :Page==2 ?
                        <>
                        <div>
                            <h4>최대인원수를 설정해주세요.</h4>
                            <div>
                                <input onChange={maxhandler} type="number" value={Max}></input>
                            </div>
                            <h4>방 타입을 설정해주세요.</h4>
                            <div onChange={handleRadio}>
                                <label>
                                    <input name="option"  type="radio" value="Public"></input>
                                    <span>공개</span>
                                </label>
                                <label>
                                    <input name="option" type="radio" value="비공개"></input>
                                    <span>비공개</span>
                                </label>
                                <label>
                                    <input name="option" type="radio" value="강의"></input>
                                    <span>강의</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={createSubmit}>그룹 생성</button>
                        </>
                    :null
                }
            </div>
        </>
    );
}

export default CreatePage;
