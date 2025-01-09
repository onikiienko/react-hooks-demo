import { useRef } from "react";
import MyInput from "./MyInput.jsx";

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    console.log("Input value:", ref.current.value);
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
