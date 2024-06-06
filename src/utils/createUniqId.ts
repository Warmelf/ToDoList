import { ToDoListItemType } from "../types/ToDoListTypes/ToDoListTypes";

export function createUniqId(arr: Array<ToDoListItemType> | []) {
    if(arr.length) {
        const arrIds = arr.map(el => el.id);
        return Math.max(...arrIds) + 1;
    } else {
        return 1;
    }
}
