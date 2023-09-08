import "./App.css";
import Form from "./component/Form";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [openmodal, changestate] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
