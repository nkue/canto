import "./App.css";

import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <div className="card">
        <Button
          buttonStyle="primary"
          size="large"
          label="Primary Button"
          onClick={() => alert("Primary Button Clicked")}
          disabled={false}
        />
        <Button
          buttonStyle="toggle"
          size="medium"
          label=""
          ariaLabel="Toggle Button"
          disabled={false}
        />
      </div>
    </>
  );
}

export default App;
