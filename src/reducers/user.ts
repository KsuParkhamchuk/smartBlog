interface IUserState {
    token: Array<any>
}

const defaultState = {
    token: {}
} as IUserState

function userReducer(state: IUserState = defaultState, action: any) {
    debugger
    const { type, payload, response } = action

    switch (type) {
        case 'SAVE_USER':
            debugger
            return {
                ...state,
                token: [...state.token, payload]
            }
    }
    return state
}

export default userReducer
