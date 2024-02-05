import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";

function AddTodo() {
    const todoValue = useRef();
    const dispatch = useDispatch();

    const inputStyle = {
        backgroundColor: '#1a202c',
        borderRadius: '0.375rem',
        border: '1px solid #4a5568',
        focus: {
            border: '2px solid #667eea',
            ring: '2px solid #ed64a6',
        },
        color: '#ffffff',
        padding: '0.25rem 0.75rem',
        fontSize: '1rem',
        outline: 'none',
        transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    };

    const buttonStyle = {
        color: '#ffffff',
        backgroundColor: '#667eea',
        border: 'none',
        padding: '0.5rem 1.5rem',
        outline: 'none',
        hover: {
            backgroundColor: '#7f9cf5',
        },
        borderRadius: '0.375rem',
        fontSize: '1.25rem',
    };

    const formStyle = {
        margin: '1.5rem 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text: todoValue.current.value }));
        todoValue.current.value = "";
    };

    return (
        <div>
            <form onSubmit={handleAddTodo} style={formStyle}>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Enter a Todo..."
                    ref={todoValue}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
