import React, { useState, KeyboardEvent } from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import { ToDoListItemType, FilterListItemType } from "../../types/ToDoListTypes/ToDoListTypes";
import { createUniqId } from "../../utils/createUniqId";


import '../../styles/ToDoList.css';

function ToDoList () {
    const [listItems, setListItems] = useState<Array<ToDoListItemType> | []>([]);
    const [filter, setFilter] = useState<FilterListItemType>("all");
    const [itemTitle, setItemTitle] = useState<string>("");

    function addItem() {
        const newItem:ToDoListItemType = {
            id: createUniqId(listItems),
            title: itemTitle,
            isDone: false
        }
        setListItems([newItem, ...listItems]);
        setItemTitle("");
    }

    function removeItem(id: number) {
        const newTasks = listItems.filter(el => el.id !== id);
        setListItems(newTasks);
    }

    function changeFilter(val: FilterListItemType) {
        setFilter(val);
    } 

    function pressEnter(e: KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter" && itemTitle) {
            addItem();
        }
    }

    function changeListItemStatus(id: number, isDone: boolean) {
        const item = listItems.find(el => el.id === id);
        if(item) {
            item.isDone = isDone;
        }
        
        setListItems([...listItems]);
    }

    let resultListItems = [...listItems];

    switch(filter) {
        case "all":
            resultListItems = [...listItems]
            break;
        case "completed":
            resultListItems = listItems.filter(el => el.isDone);
            break;
        case "active":
            resultListItems = listItems.filter(el => !el.isDone);
            break;
    }

    return (
      <div className="to-do-list">
        <h2 className="to-do-list_title">ToDo List</h2>
        <div className="to-do-list_input-container-bg">
            <div className="to-do-list_input-container">
                <input 
                    value={itemTitle} 
                    type="text" 
                    onChange={(e) => setItemTitle(e.currentTarget.value)}
                    onKeyUp={(e) => pressEnter(e)}
                    placeholder="make burgers"
                    className="input"
                />
                <button 
                    disabled={!itemTitle} 
                    onClick={() => addItem()}
                    className="add-btn"
                >
                    Add item
                </button>
            </div>
        </div>
        <div className="to-do-list_filter-btns">
            <button 
                className={`filter-btn ${filter === "all" ? 'active-btn' : ''}`}
                onClick={() => changeFilter("all")}
            >
                All
            </button>
            <button 
                className={`filter-btn ${filter === "active" ? 'active-btn' : ''}`}
                onClick={() => changeFilter("active")}
            >
                Active
            </button>
            <button 
                className={`filter-btn ${filter === "completed" ? 'active-btn' : ''}`}
                onClick={() => changeFilter("completed")}
            >
                Completed
            </button>
        </div>
        <ul className="to-do-list_items">
            {
                resultListItems.map(el => <ToDoListItem 
                    key={el.id} item={el} removeItem={removeItem} 
                    changeListItemStatus={changeListItemStatus}></ToDoListItem>)
            }
        </ul>
      </div>
    )
}

export default ToDoList;