import React, {useState} from 'react';
import '../App.scss';
import Login from './ModalLogin'

function MainHeader() {
    const [isOpen, setState] = useState(false);
    function open(){
        setState(true);
    }
    function close(){
        setState(false);
    }
    return (
        <>
            <Login isOpen={isOpen} close={close}></Login>
            <header>
                <div className="logo">study</div>
                <ul>
                    <li onClick={open} >로그인</li>
                    <li>회원가입</li>
                </ul>
            </header>
        </>
    );
}

export default MainHeader;
