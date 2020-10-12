import React from 'react';
import Header from "./GListHeader"
import List from "./GListList"
import Tag from "./GListTag"
import "./glist.scss"
function GListPage() {
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
