import "./App.css";
import React, { useState } from "react";

const emojidictionary = {
  "😐": "natural face",
  "😠": "angry",
  "🍕": "pizza",
  "🎈": "ballon",
  "🙂": "smiling",
  "🤔": "thinking",
  "❤️": "love",
  "😨": "fearful",
  "🧨": "firecracker",
  "👑": "crown",
};

const Emojis = Object.keys(emojidictionary);
function App() {
  const [meaning, setMeaning] = useState("Translation will apear here...");
  const [emoji, setEmoji] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    let input = e.target.value;
    if (input) {
      setMeaning(emojidictionary[input]);
    }
  };

  const handleClickEmoji = (emoji) => {
    setMeaning(emojidictionary[emoji]);
    setEmoji(emoji)
  };
  return (
    <div className="App">
      <h1>Inside Outttt</h1>
      <input placeholder="Search your emoji" onChange={handleChange} />
      <h3>{meaning}{emoji}</h3>
      {Emojis.map((emoji, index) => (
        <span key={index} onClick={() => handleClickEmoji(emoji)}>
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default App;
