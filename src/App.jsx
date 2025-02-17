import "./App.css";
import StateMachine from "./components/StateMachine";
import CompoundComponents from "./components/CompoundComponents";
import StateMachineReducer from "./components/StateMachineReducer";

function App() {
  return (
    <div className="App">
      <div>
        State machine with reducer:
        <StateMachineReducer />
      </div>
      <div>
        State Machine width fetch:
        <StateMachine />
      </div>
      <div>
        Compound Components:
        <CompoundComponents />
      </div>
    </div>
  );
}

export default App;
