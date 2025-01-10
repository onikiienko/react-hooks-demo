import { useRef, useImperativeHandle } from "react";

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        // get value() {
        //   return inputRef.current.value;
        // },
      };
    },
    [],
  );

  return <input ref={inputRef} {...props} />;
}

export default MyInput;
