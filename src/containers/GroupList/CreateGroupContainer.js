import React, { useEffect, useState } from 'react';
import { GroupList } from '../../components'
import { useDispatch, useSelector } from "react-redux";
function CreateGroupContainer() {
    return(
        <GroupList></GroupList>
    );
}

export default CreateGroupContainer;
