import React from "react";
import { memo } from "react";

function TodoTasks({numOfTodosLeft, setStatusFilter, status}){
    console.log(setStatusFilter)
    const filterBtns = [
        {
            title: 'All',
            isActive: status === 'all',
            onClick: ()=> setStatusFilter('all'),
            link: ''
        },
        {
            title: 'Active',
            isActive: status === 'active',
            onClick: ()=> setStatusFilter('active'),
            link: 'Active'
        },
        {
            title: 'Completed',
            isActive: status === 'completed',
            onClick: ()=> setStatusFilter('completed'),
            link: 'Completed'
        }
    ]
    console.log(filterBtns)
    return (
        <div className="task-todo" >
            <span className="todo-count" style={{width:'80%'}}>
                Còn <strong>{numOfTodosLeft}</strong> Tasks chưa hoàn thành
            </span>
            <ul className="filter">
                {filterBtns.map(btn =>(
                    <FilterBtn
                    key = {`btn${btn.title}`}
                    {...btn}
                    ></FilterBtn>
                ))
                }
            </ul>
        </div>
    )}

    const FilterBtn = memo(props=>{
        const {title, onClick, link, isActive} = props
        return (
            <li>
                <a 
                href={`#/${link}`}
                className={`${isActive ? 'selected' : ''}`}
                onClick={onClick}
                >{title}</a>
            </li>
        )
    })
export default TodoTasks