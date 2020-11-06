import React, { useEffect, useState } from 'react';
import Card from "./GListCard"
import { GetGroup } from "../../actions/userAction"
import { useDispatch, useSelector } from "react-redux";
function GroupList() {
    const dispatch=useDispatch();
    const [Groups,setGroups] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        dispatch(GetGroup("",""))
            .then((res)=>{
                setGroups(res.payload);
                console.log(res);
            })
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중..</div>)
    if(!Groups) return(null);
    return (
        <div className="List">
            <h5>스터디룸</h5>
            <ul>
                {Groups.map((i,index)=>{
                    return(<Card props={i} key={index}></Card>)
                })}
            </ul>
        </div>
    );
}

export default GroupList;
