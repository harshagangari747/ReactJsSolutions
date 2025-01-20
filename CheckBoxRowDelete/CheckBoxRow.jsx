import { useState } from "react";

export default function CheckBoxRow(props) {
  const [rowState, setRowState] = useState(
    new Array(props.items.length).fill(false)
  );

  function handleCheckBoxSelect(event) {
    setRowState((vals) => {
      const updatedVals = [...vals];
      updatedVals[event.target.id] = !updatedVals[event.target.id];
      return updatedVals;
    });
  }

  function handleRowDelete(event) {
    props.onSelect(event.target.id);
  }
  return (
    <>
      {props.items.map((x, key) => (
        <div>
          <input
            id={key}
            value={key}
            type="checkbox"
            onChange={handleCheckBoxSelect}
          />
          <label>{x}</label>
          <span>
            {rowState[key] && (
              <button id={key} onClick={handleRowDelete}>
                del
              </button>
            )}
          </span>
        </div>
      ))}
    </>
  );
}
