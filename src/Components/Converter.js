import React, { useState } from "react";
import handleConversion from "./handleConversion";

function Converter() {
    const [stringArr, setArr] = useState();
    const [display, setDisplay] = useState("none");
    const regex = /(\d[ ]*[ \t]*[¼⅓½⅔¾]|[¼⅓½⅔¾]|\d[ ]*[ \t]*(?:1\/[432]|2\/3|3\/4)|(?:1\/[432]|2\/3|3\/4)|\d?[-]?(?:\sto\s)?\d?)(?!\S)(?:[ \t]+,?(cups|cup|teaspoons|teaspoon|tsps|tsp|tablespoons|tablespoon|tbsp|tbsps|oz|ounces|ounce))?(.*)|(.*)/g;

    function handleClick(e) {
        e.preventDefault();
        if (document.getElementById("text").value) {
            let textinput = document.getElementById("text").value;
            setArr(
                textinput.split(/\n/).filter((s) => {
                    return s !== " ";
                })
            );
            setArr((arr) =>
                arr.map((string) => {
                    regex.lastIndex = 0;
                    let matches = regex.exec(string);
                    let output
                    if (matches[4]) {
                      output = {
                        amount:null,
                        unit:null,
                        ingredient:matches[4]
                      }
                    } else {
                      output = {
                          amount: matches[1],
                          unit: matches[2],
                          ingredient: matches[3],
                      };
                    }
                    return output;
                })
            );
            setDisplay(null);
            setArr((e) => handleConversion(e));
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Enter the ingredients here</h1>
            <textarea className="conversionInput" id="text"></textarea>
            <br />
            <button className="convertButton" onClick={handleClick}>
                Convert
            </button>
            <br/>
            <h1 style={{ display: display }}>Converted Ingredients:</h1>
            <h2>{stringArr}</h2>
        </div>
    );
}

export default Converter;
