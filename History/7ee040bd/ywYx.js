import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // for fetching the data new open for the first time
  useEffect(() => {
    fetchTodos();
  }, []);

  // for fetching the objects / todos in the   database
  const fetchTodos = async () => {
    let data = await fetch("http://localhost:3001/todo/get");
    data = await data.json();
    setTodos(data);
  };

  // toggling the complete todo
  const completeTodo = async (id) => {
    let data = await fetch("http://localhost:3001/todo/put/" + id, {
      method: "PUT",
    });
    data = await data.json();

    setTodos(
      todos.map((item) => {
        if (item._id === data._id) {
          item.complete = data.complete;
        }
        return item;
      })
    );
  };

  // for deleting todo
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    let data = await fetch("http://localhost:3001/todo/delete/" + id, {
      method: "DElETE",
    });
    data = await data.json();
    fetchTodos();
  };

  // for adding todo
  const addTodo = async () => {
    if (inputValue !== "") {
      let data = await fetch("http://localhost:3001/todo/post/" + inputValue, {
        method: "POST",
      });
      data = await data.json();
      setTodos([data, ...todos]);
      setInputValue("");
    }
  };

  // for storing the value of input field in a state
  const inputStateFunc = async (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  return (
    <>
      <div className="App text-white bg-black   min-h-[100vh] p-10 font-serif">
        <div className="text-3xl"> Welcome to Todo List </div>
        <div className="mb-10 text-xl text-slate-400">Your tasks </div>

        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => inputStateFunc(e)}
            className="mb-5 px-3 w-[50rem] h-8 text-black rounded-xl outline-none border-none"
          />
          <button
            onClick={addTodo}
            className="p-1 ml-3 text-black bg-orange-500 rounded-xl hover:bg-purple-700 hover:text-white"
          >
            {" "}
            Add Todo
          </button>
        </div>
        <div className="">
          {todos.map((item) => {
            return (
              <div
                key={item._id}
                onClick={() => {
                  completeTodo(item._id);
                }}
                className={`todo cursor-pointer rounded-xl bg-slate-500 min-h- flex mb-5 items-center hover:opacity-[.8] `}
                
              >
                {/* //check box */}
                <div
                  className={`w-5 h-5 rounded-full ml-2 ${item.complete ? "bg-green-800" : "bg-slate-400"
                    }`}
                ></div>

                {/* // text to dispaly */}

                <div className={`ml-5 text-xl `}>
                  <span className={item.complete ? "line-through" : ""}>
                    {item.todo}
                  </span>
                  {item.complete ? (
                    <span className="opacity-[.5]">completed</span>
                  ) : (
                    ""
                  )}
                </div>
                {/* // for deleting a particular todo */}
                <div
                  onClick={(e) => {
                    deleteTodo(item._id, e);
                  }}
                  className="absolute z-10 cursor-pointer left-[81rem] bg-purple-800 w-6 text-center hover:w-7 hover:h-7 hover:bg-red-800 rounded-full"
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
