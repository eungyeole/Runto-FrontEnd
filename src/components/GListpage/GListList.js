import React from 'react';
import Card from "./GListCard"
function GListList() {
    return (
        <div className="List">
            <h5>스터디룸</h5>
            <ul>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ul>
        </div>
    );
}

export default GListList;
