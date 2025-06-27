import "./App.css";

import { Button } from "./stories/Button";
import AccordionDemo from "./stories/Accordion";

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
      <AccordionDemo />
    </>
  );
}

export default App;
