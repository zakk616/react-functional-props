import React, { useState } from "react";

function TodoItem(props) {
  const [style, setStyle] = useState({ textDecoration: "none" });

  function handleClick() {
    setStyle((prev) => {
      if (prev.textDecoration === "none") {
        return { textDecoration: "line-through" };
      } else {
        return { textDecoration: "none" };
      }
    });
  }

  return (
    <li
      style={style}
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {props.text}
    </li>
  );
}
export default TodoItem;
