import "./App.css";
import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button btnType="primary" size="larget">
        primary
      </Button>
      <Button btnType="ghost" size="small">
        ghost
      </Button>
      <Button btnType="dashed" size="larget">
        dashed
      </Button>
      <Button btnType="link" size="larget" shape="round">
        link
      </Button>
      <Button btnType="text" size="larget">
        text
      </Button>
    </div>
  );
}

export default App;
