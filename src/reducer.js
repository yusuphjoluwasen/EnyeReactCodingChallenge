import {CREATE_TABLE_DATA} from "./constant";

const initialState = {
    tableData:[]
};

export const rootReducer = (state = initialState, action) => {
    if(action.type === CREATE_TABLE_DATA){
        return Object.assign({}, state, {tableData: state.tableData.concat(action.payload)})
    }
    return state;
};