import { useRef, useImperativeHandle } from "react";

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          console.log("focus");
          inputRef.current.focus();
        },
        get value() {
          return inputRef.current.value;
        },
      };
    },
    [],
  );

  return <input {...props} ref={inputRef} />;
}

export default MyInput;
