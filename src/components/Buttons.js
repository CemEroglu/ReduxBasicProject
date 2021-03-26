import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {arttır, azalt} from '../store/actions/counter'
import {ekle} from '../store/actions/list'

const Buttons=()=>{
    const dispatch = useDispatch();
    const {counter_key } = useSelector((state)=>state);
    return(
        <div>
        <button onClick={()=>dispatch(azalt())}>-</button>
        <button onClick={()=>dispatch(arttır())}>+</button>
        
        <button onClick={()=>dispatch(ekle(counter_key))}>Listeye Ekle</button>
        </div>
    )
}

export default Buttons;