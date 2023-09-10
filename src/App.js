import React, { useState } from "react";
import todos from "./data";

function App() {
  const [newItem, setNewItem] = useState("abcd");
  const [items, setItems] = useState(todos);

  return (
    <React.Fragment>
      <form className="new-item-form">
        <label>New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        ></input>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setItems([
              ...items,
              { title: newItem, checked: false, id: items.length + 1 },
            ]);
          }}
        >
          Add
        </button>
      </form>

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {items.length > 0 &&
          items.map((item) => (
            <li id={item.id} key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    const newState = items.map((obj) => {
                      if (obj.id === item.id)
                        return { ...obj, checked: !item.checked };
                      return obj;
                    });

                    setItems([...newState]);
                  }}
                />
                {item.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => {
                  const filteredState = items.filter(
                    (obj) => obj.id !== item.id
                  );

                  setItems([...filteredState]);
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
