import './App.css';
import ComponentB from "./Component/useState/ComponentB";
import ComponentA from "./Component/useState/ComponentA";
import ComponentUseReducer from "./Component/useReducer/ComponentUseReducer";
import ComponentUseRef from "./Component/useRef/ComponentUseRef";
import ComponentUseMemo from "./Component/useMemo/ComponentUseMemo";
import ComponentUseCallback from "./Component/useCallback/ComponentUseCallback";
import ComponentUseWindowSize from "./Component/CustomHooks/ComponentUseWindowSize";

function App() {
  return (
    <div className="App">
      <ComponentB/>
      <ComponentA/>
      <ComponentUseReducer/>
      <ComponentUseRef/>
      <ComponentUseMemo/>
      <ComponentUseCallback/>
      <ComponentUseWindowSize/>
    </div>
  );
}

export default App;
