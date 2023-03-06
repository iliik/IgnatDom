const initState = {
    themeId: 1,
}
export  type InitState = typeof initState

type SetThemeType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: SetThemeType): InitState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
