import React, { useState } from 'react';
import Header from "./GListHeader"
import List from "./GroupList"
import Tag from "./GListTag"
import "./glist.scss"
function GListPage() {
    const [state,setState]=useState(false);
    return (
        <>
            <Header></Header>
            <div className="glist">
                <Tag></Tag>
                <List></List>
            </div>
        </>
    );
}

export default GListPage;
