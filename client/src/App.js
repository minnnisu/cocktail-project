import "./App.css";
import MultipleSelectChip from "./components/Atoms/MultipleSelectChip/MultipleSelectChip";
function App() {
  const handleInputItemsSubmit = (items) => {
    console.log(items);
  };

  return (
    <div className="App">
      <MultipleSelectChip name={"민트"} />
    </div>
  );
}

export default App;
