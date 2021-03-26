import React from 'react'
import {useDispatch} from 'react-redux';
import {arttır, azalt} from '../store/actions/counter'

const Buttons=()=>{
    const dispatch = useDispatch();
    return(
        <div>
        <button onClick={()=>dispatch(azalt())}>-</button>
        <button onClick={()=>dispatch(arttır())}>+</button>
        </div>
    )
}

export default Buttons;