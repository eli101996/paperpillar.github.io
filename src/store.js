import {createStore} from 'redux'

const initialState={

    className: 'normal',

}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ACTUALIZAR_CLASE':{
            return { ...state, activeClass: action.className,}
        }
        default: {
            return state
        }
    }
}

export default createStore(reducer)