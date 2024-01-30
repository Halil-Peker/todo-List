import { useState } from "react";
import "../../App.css";

function FormList({ items, setItems }) {
  const [filter, setFilter] = useState("all");

  // Görev tamamlandı ya da tamamlanmadı için tik atma yeri
  const toggleComplete = (i) => {
    const newItems = [...items];
    newItems[i].completed = !newItems[i].completed;
    setItems(newItems);
  };

  // Seçilen görevi silme
  const deleteSection = (i) => {
    const newItems = [...items];
    newItems.splice(i, 1);
    setItems(newItems);
  };

  // Tamamlananları silme
  const deleteComplete = () => {
    const newItems = [];
    items.forEach((item) => {
      if (!item.completed) {
        newItems.push(item);
      }
    });
    setItems(newItems);
  };

  // Görev kartının alt kısmında yer alan "all, active ve completed işlemlerinin döndüğü kısım"
  const filteredItem = items.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return item.completed;
    } else return !item.completed;
  });
  return (
    <div className="list">
      <div>
        <ul>
          {filteredItem.map((item, i) => (
            <li key={i}>
              <input
                className="chckBtn"
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(i)}
              />
              <span className="todo">{item.mission}</span>

              <button className="dltBtn" onClick={() => deleteSection(i)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <span className="count">{items.length} left</span>
        <button onClick={() => setFilter("all")}>All Todos</button>
        <button onClick={() => setFilter("completed")}>Done Todos</button>
        <button onClick={() => setFilter("active")}>Active Todos</button>
        <button onClick={() => deleteComplete()}>clear completed</button>
      </div>
    </div>
  );
}

export default FormList;
