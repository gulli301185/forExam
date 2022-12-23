
import { combineReducers } from 'redux'

const initialState={
    datas:[],
    episode:""
}


const dataReducer=( state=initialState, action)=>{
    console.log(state.datas);
    if(action.type==="GET"){
          return{
            ...state,
            datas:[...action.data]
          }
    }
    return state
}

export const datasReducer=combineReducers({
    dataRed:dataReducer,
})

