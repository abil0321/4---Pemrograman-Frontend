import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);
  // let angka = 0;

  function AddAngka() {
    setAngka(angka + 1);
    // console.log(angka);
  }

  function UpdateDOM() {
    console.log("Lifecycle: Component dimount");

    document.title = `Result: ${angka}`;
  }

  useEffect(UpdateDOM, [angka]);

//   useEffect(() => {
//     console.log("Lifecycle: Component dimount");
//     document.title = `Result: ${angka}`
//   }, [angka]);

  console.log("Lifecycle: Component dirender");

  return (
    <>
      <p>Result: {angka}</p>
      <button onClick={AddAngka}>Add</button>
    </>
  );
}

export default Counter;
