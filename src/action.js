import {CREATE_TABLE_DATA} from "./constant";

export const addTableData = tableData => {
    return {
        TYPE:CREATE_TABLE_DATA,
        payload:tableData
    }
};