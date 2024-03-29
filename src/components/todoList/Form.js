import React from "react";

function Form({ setItems, items }) {
  const formSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { mission: e.target.input.value, completed: false }]);
    e.target.input.value = "";
  };

  return (
    <div className="form">
      <form onSubmit={formSubmit}>
        <input
          className="input"
          name="input"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default Form;
