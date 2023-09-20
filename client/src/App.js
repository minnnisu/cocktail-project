import MainRouter from "./routes/MainRouter";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
