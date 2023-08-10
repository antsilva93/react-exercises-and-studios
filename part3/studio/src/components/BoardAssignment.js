import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         label: "Happy Hour",
         value: "Happy Hour"
      },
      {
         label: "Fernet Fun",
         value: "Fernet Fun"
      },
      {
         label: "Equal Parts",
         value: "Equal Parts"
      }
   ];

const [boardName, setName] = useState('No Boards Yet');

const handleChange = (event) => {
   setName(event.target.value);
}

return (
   <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
         <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
   </div>
);

}