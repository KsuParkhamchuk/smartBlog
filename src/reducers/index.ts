
import {combineReducers} from 'redux'
import user from './user'

export interface IRootState {
    user: any
}

const rootReducer = combineReducers<IRootState>({
    user
})

export default rootReducer