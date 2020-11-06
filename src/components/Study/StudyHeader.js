import React from "react"
function StudyHeader(){
    return(
        <header className="studyheader">
            <i onClick={()=>window.location.href="/myroom"} className="fas fa-arrow-left" ></i>
            <ul>
                <li onClick={()=>window.location.href="/room/아이유"}><i class="fas fa-comment-alt"></i></li>
            </ul>
        </header>
    )
}
export default StudyHeader;