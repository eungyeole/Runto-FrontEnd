import React from 'react';
import Header from './MyRoomHeader'
import List from './MyRoomList'
import './MyRoom.scss'
function MyRoomPage() {
    return (
        <>
            <Header></Header>
            <div className="rlist">
                <List></List>
            </div>
        </>
    );
}

export default MyRoomPage;
