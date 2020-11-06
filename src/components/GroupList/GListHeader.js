import React from 'react';
function GListHeader({isOpen}) {
    return (
        <header className="glist-header">
            <div className="logo">스터디</div>
            <div onClick={()=>{window.location.href="/create"}} className="glist-plus"><i className="fas fa-plus"></i></div>
        </header>
    );
}

export default GListHeader;
