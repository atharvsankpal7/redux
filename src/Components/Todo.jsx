import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../slice/todoSlice";
import { useRef } from "react";

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const editText = useRef();
    const listItemStyle = {
        marginTop: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4a5568",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
    };

    const textContainerStyle = {
        color: "#ffffff",
    };

    const deleteButtonStyle = {
        color: "#ffffff",
        backgroundColor: "#e53e3e",
        border: "none",
        padding: "0.25rem 1rem",
        outline: "none",
        hover: {
            backgroundColor: "#c53030",
        },
        borderRadius: "0.375rem",
        fontSize: "1rem",
    };

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };
    const handleEdit = (id) => {
        dispatch(editTodo({  id, text: editText.current.value }));
    };
    return (
        <>
            <div>Todos</div>
            <ul style={{ listStyle: "none" }}>
                {todos.map((todo) => (
                    <li style={listItemStyle} key={todo.id}>
                        <div style={textContainerStyle}>{todo.text}</div>
                        <button
                            onClick={() => {
                                handleDelete(todo.id);
                            }}
                            style={deleteButtonStyle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                        <input type="text" name="" id="" ref={editText} />
                        <button
                            onClick={() => {
                                handleEdit(todo.id);
                            }}
                        >
                            edit
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
