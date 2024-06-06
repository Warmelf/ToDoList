import React from "react";
import { ToDoListItemType } from "../../types/ToDoListTypes/ToDoListTypes";

type ToDoListItemProps = {
  item: ToDoListItemType;
  removeItem: (id: number) => void;
  changeListItemStatus: (id: number, val: boolean) => void;
}

function ToDoListItem(props: ToDoListItemProps) {
  const {item, removeItem, changeListItemStatus} = props;
    return (
      <li className="to-do-list_item">
        <label className="item-label">
          <input 
            type="checkbox" 
            checked={item.isDone} 
            onChange={(e) => changeListItemStatus(item.id, e.currentTarget.checked)}
            className={item.isDone ? "checked" : ""}
          />
          <span className={`title ${item.isDone ? "done" : ""}`}>{item.title}</span>
        </label>
        <button 
          onClick={() => removeItem(item.id)}
          className="remove-btn"
        ></button>
      </li>
    )
}

export default ToDoListItem;