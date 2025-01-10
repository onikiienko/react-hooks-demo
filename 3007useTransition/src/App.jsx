import { useTransition, useState } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("Transition started!");

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Transition complete!");
    })();

    // startTransition(async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 3000));
    //   console.log("Transition complete!");
    // });
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <button onClick={handleClick}>Start Transition</button>
      {/* <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Loading..." : "Start Transition"}
      </button> */}
    </div>
  );
}

export default App;
