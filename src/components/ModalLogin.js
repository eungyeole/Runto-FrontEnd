import React from 'react';
import '../App.scss';

function ModalLogin({isOpen,close}) {
    return(
        <>
            {  
                isOpen ?
                    <div className="modal">
                        <div onClick={close} className="modal-overlay"></div>
                        <form className="ModalLogin">
                            <h3>로그인</h3>
                            <input placeholder="아이디"></input>
                            <input type="password" placeholder="비밀번호"></input>
                            <div className="checkbox">
                                <p>
                                    <input type="checkbox" id="c1" name="cb"/>
                                    <label for="c1">아이디저장</label>
                                </p>
                            </div>
                            <button>로그인</button>
                        </form>
                    </div>
                :null
            }
        </>
    );
}

export default ModalLogin;
