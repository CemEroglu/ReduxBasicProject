import {LISTEYE_EKLE} from '../types'

export const ekle = (sayi) =>{
    return{
        type:LISTEYE_EKLE,
        payload:sayi
    }
}