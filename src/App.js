import * as getFormattedDate from "productivitytools.learning.node.date";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(null);

  const updateDate = () => {
    debugger;
    setDate(getFormattedDate());
  };

  return (
    <div>
      <p>hello current date:{getFormattedDate()}</p>
      UpdatedDate: {date}
      <button onClick={updateDate}>Update date in state</button>
    </div>
  );
}

export default App;
