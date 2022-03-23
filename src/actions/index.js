export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY =  'CLEAR_DISPLAY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const ADD_MEMORY = 'ADD_MEMORY';
export const APPLY_MEMORY = 'APPLY_MEMORY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisp = () => {
    return({type:CLEAR_DISPLAY})
}

export const clearMem = () => {
    return({type:CLEAR_MEMORY})
}

export const memAdd = () => {
    return({type:ADD_MEMORY})
}

export const applyMem = (number) => {
    return({type:APPLY_MEMORY, payload:number})
}

