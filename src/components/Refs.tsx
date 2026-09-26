import { useRef } from "react";

const Refs = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const changeFocus = () => {
    inputRef.current?.focus();
  };

  const changeDivColour = () => {
    if (divRef.current) {
      divRef.current.style.background = "red";
    }
  };

  const formReset = () => {
    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <input ref={inputRef} type="text" placeholder="Type here..." />

      <div ref={divRef}>This is a div.</div>

      <button type="button" onClick={changeFocus}>
        Focus Input
      </button>
      <button type="button" onClick={changeDivColour}>
        Change Div Color
      </button>
      <button type="button" onClick={formReset}>
        Reset Form
      </button>
    </form>
  );
};

export default Refs;
