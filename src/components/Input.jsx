import React, { useState } from "react";
import style from "./Input.module.css";
import Output from "./Output";
function Input() {
  const [powerOn, setPowerOn] = useState(false);
  const [outputText, setOutputText] = useState("");

  const handleResult = (e) => {
    const outputArray = outputText.split("");
    console.log(outputArray);
    let result = 0;
    for (let i = 0; i < outputArray.length; i++) {
      result += Number(outputArray[i]);
    }
    console.log(result);
  };

  return (
    <>
      <Output powerOn={powerOn} outputText={outputText} />

      <div className={style.container}>
        <div className={style.btn} onClick={() => setPowerOn(!powerOn)}>
          {powerOn ? "Off" : "On"}
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          %
        </div>
        <div className={style.btn} onClick={(e) => setOutputText("0")}>
          C
        </div>
        <div
          className={style.btn}
          onClick={(e) => {
            const abc = outputText.split("");
            abc.pop();
            setOutputText(abc.join(""));
          }}
        >
          Del
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          7
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          8
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          9
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          ÷
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          4
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          5
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          6
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          ×
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          1
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          2
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          3
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          -
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          0
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          .
        </div>
        <div className={style.btn} onClick={handleResult}>
          =
        </div>
        <div
          className={style.btn}
          onClick={(e) => setOutputText(outputText + e.target.innerText)}
        >
          +
        </div>
      </div>
    </>
  );
}

export default Input;
