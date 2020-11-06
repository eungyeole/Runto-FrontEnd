import React, {useState} from 'react';
function CreateTitle({setPage,Title,setTitle}) {
    const Titlehandler=(e)=>{
        e.preventDefault();
        setTitle(e.target.value);
    }
    const TitleSubmit=(e)=>{
        e.preventDefault();
        if(Title!=""){
            setPage(1);
        }
    }
    return (
        <>
            <h4>그룹의 이름을 정해주세요.</h4>
            <form onSubmit={TitleSubmit}>
                <input value={Title} onChange={Titlehandler} type="text" autoFocus></input>
                <button>다음</button>
            </form>
        </>
    );
}

export default CreateTitle;
