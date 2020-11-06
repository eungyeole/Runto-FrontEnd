import React, {useState} from 'react';
function CreateDesc({setPage,Desc,setDesc}) {
    const DescSubmit=(e)=>{
        e.preventDefault();
        if(Desc!=""){
            setPage(2);
        }
    }
    const Deschandler=(e)=>{
        setDesc(e.target.value);
    }
    return (
        <>
            <h4>그룹의 소개글을 작성해주세요.</h4>
            <form onSubmit={DescSubmit}>
                <input value={Desc} onChange={Deschandler} type="text" autoFocus></input>
                <button>다음</button>
            </form>
        </>
    );
}

export default CreateDesc;
