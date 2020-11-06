import React from 'react';
import Card from './MyRoomCard'
function MyRoomList() {
    return (
        <div className="List">
            <ul>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ul>
        </div>
    );
}

export default MyRoomList;
