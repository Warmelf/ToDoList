export type ToDoListItemType = {
    id: number;
    title: string, 
    isDone: boolean
}

export type FilterListItemType = "all" | "completed" | "active";