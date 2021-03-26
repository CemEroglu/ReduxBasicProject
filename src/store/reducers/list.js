import {LISTEYE_EKLE} from '../types'

const default_state = [];

const reducer = (state=default_state, action) =>{
    switch (action.type) {
        case LISTEYE_EKLE:
            return [...state, action.payload];
            break;
    
        default:
            return state;
    }

}

export default reducer