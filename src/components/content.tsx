import { useState } from "react";

function Content() {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    const textArea = document.getElementById(
      "text-area"
    ) as HTMLTextAreaElement;
    setDisplayText(textArea.value);
  };

  return (
    <main>
      <div id="content">
        <button onClick={handleButtonClick}>Display Text</button>
        <textarea id="text-area" placeholder="Enter text"></textarea>
      </div>
      <p>{displayText}</p>
    </main>
  );
}

export default Content;
