import React, { useEffect } from "react"
import Header from "./StudyHeader"
import Main from "./StudyMain"
import List from "./StudyList"
import "./Study.scss"
function StudyPage(){
    useEffect(()=>{
        document.body.style.background="#f9fbfc";
    })
    return(
        <>
            <div style={{boxShadow:"1rem 0.9rem 2.7rem 0 rgba(54, 16, 93, 0.1)"}}>
                <Header></Header>
                <Main></Main>
            </div>
            <div className="slist">
                <List></List>  
            </div>
        </>
    )
}
export default StudyPage;