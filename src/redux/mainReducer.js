 const SET_TOGGLE_MENU='SET_TOGGLE_MENU'
 const SET_IS_START='SET_IS_START'

const initialState={
    isStart:false,
    isToggleMenu:false
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TOGGLE_MENU:
            return {...state,isToggleMenu:!state.isToggleMenu};
        case SET_IS_START:
            return {...state,isStart:!state.isStart};
        default:
            return state;
    }
}

export const setToggleMenu=()=>({type:SET_TOGGLE_MENU})
export const setStart=()=>({type:SET_IS_START})
export default mainReducer
