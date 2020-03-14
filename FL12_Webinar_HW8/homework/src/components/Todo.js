import React from "react";
import '../style.css';


function del(e) {
    e.target.parentElement.remove()
}

const Todo = ({ text, data, complete, onClick }) => {
    return (
        <div className='cont'>
            <li
                onClick={onClick}
                style={{ textDecoration: complete ? "line-through" : "none" }}
            >
                <div className='liData'>{data}</div>
                <div className='liText'>{text}</div>
            </li>

            <button onClick={del}>delete</button>


        </div>

    );
};

export default Todo;
