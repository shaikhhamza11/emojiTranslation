import { useState } from "react";
import "./styles.css";

export default function App() {
  let emojiDictionary = {
    "😀": "Smiling",
    "😍": "Loving",
    "🙄": "Disbelief",
    "😑": "Annoyance",
    "❤": "Heart",
    "😥": "Sad"
  };
  let knownEmojis = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  const handleEmoji = (e) => {
    let userInput = e.target.value;
    let translation = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(translation);
    } else {
      setMeaning("We dont have that in our database");
    }
  };
  const clickEmojiHandler = (e) => {
    let clickedEmojiMeaning = emojiDictionary[e];
    setMeaning(clickedEmojiMeaning);
  };
  //abbreviations
  const abbreviationDictionary = {
    ROFL: "Rolling on floor laughing",
    LMK: "Let me know",
    ILY: "I love you.",
    YOLO: " You only live once",
    SMH: "Shaking my head",
    NVM: "Never Mind"
  };
  const abbre = Object.keys(abbreviationDictionary);
  const [abbrMeaning, setAbbrMeaning] = useState("");
  const handleAbbreviation = (e) => {
    let userInput1 = e.target.value.toUpperCase();

    if (userInput1 in abbreviationDictionary) {
      let tranAbbr = abbreviationDictionary[userInput1];
      setAbbrMeaning(tranAbbr);
    } else {
      setAbbrMeaning("We dont have that in our database");
    }
  };
  const abbreClickHandler = (a) => {
    let meaning = abbreviationDictionary[a];
    setAbbrMeaning(meaning);
  };
  return (
    <div className="App">
      <div className="emoji">
        <h1>Emoji Interpreter</h1>
        <input
          onChange={handleEmoji}
          placeholder="put an emoji to get translations "
        />
        <p> {meaning}</p>
        {knownEmojis.map((e) => {
          return (
            <span
              onClick={() => clickEmojiHandler(e)}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                fontSize: "2rem"
              }}
              key={e}
            >
              {e}
            </span>
          );
        })}
      </div>
      <div className="abbreviation">
        <h1
          style={{
            paddingTop: "1rem"
          }}
        >
          Abbreviation Interpreter
        </h1>
        <input
          onChange={handleAbbreviation}
          placeholder="put an abbreviation to get fullform "
        />
        <p> {abbrMeaning}</p>
        {abbre.map((a) => {
          return (
            <span
              onClick={() => abbreClickHandler(a)}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold"
              }}
              key={a}
            >
              {a}
            </span>
          );
        })}
      </div>
    </div>
  );
}
