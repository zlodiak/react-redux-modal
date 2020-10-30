const appReducer = function appReducer(state = {isVisibleModal: false, textModal: null}, action) {
    switch(action.type) {
        case 'SET_VISIBILITY': {
            state = {
                ...state,
                isVisibleModal: action.payload
            };
            break;
        }
        case 'SET_TEXT': {
            state = {
                ...state,
                textModal: action.payload
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const setModalVisibilityCreator = visibility => {
    return { type: 'SET_VISIBILITY', payload: visibility }
}

export const setModalTextCreator = text => {
    return { type: 'SET_TEXT', payload: text }
}

export default appReducer;