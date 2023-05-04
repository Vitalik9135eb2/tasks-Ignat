type InitStateType = {
    themeId: number
}

type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}
const initState :InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            console.log(state)
            return {...state,themeID: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID', id}) // fix any
