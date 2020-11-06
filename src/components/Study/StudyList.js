import React from "react"
import Card from "./StudyCard"
function StudyList(){
    return(
        <div className="List">
            <ul className="SList">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ul>
        </div>
    )
}
export default StudyList;