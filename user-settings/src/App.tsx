import "./App.css";
import { useState } from "react";

import { Button } from "./stories/button/Button";
import AccordionDemo from "./stories/accordion/Accordion";
import Dropdown from "./stories/dropdown/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState("option1");

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
      <Dropdown
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        value={selectedOption}
        onChange={setSelectedOption}
        label="Select an Option"
      />
    </>
  );
}

export default App;
