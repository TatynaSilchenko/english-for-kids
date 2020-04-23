 const SET_TOGGLE_MENU='SET_TOGGLE_MENU'

const initialState={
    isToggleMenu:false
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TOGGLE_MENU:
            return {...state,isToggleMenu:!state.isToggleMenu};
        default:
            return state;
    }
}

export const setToggleMenu=()=>({type:SET_TOGGLE_MENU})
export default mainReducer