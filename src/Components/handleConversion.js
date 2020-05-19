import React from "react";
import amountToFloat from "./amountToFloat";
import getWeight from "./getWeight";

function handleConversion(objArr) {
    const finalArr = objArr.map((o) => {
        let unit = o.unit;
        let ingredient = o.ingredient;
        let amountNumberValue;
        let convertedValue;
        let ofof;

        if (!o.amount) {
          convertedValue = ingredient
        } else {
          if (ingredient) {
            ofof = ingredient.includes(" of ") ? "" : " of "
          }


          if (o.amount.indexOf("-") > -1 | o.amount.indexOf("to") > -1) {
            amountNumberValue = o.amount
          } else {
            amountNumberValue = amountToFloat(o)
          }

          if (unit) {
              let value = getWeight(ingredient, unit, amountNumberValue)
              console.log(value)
              if (value === "NaN") {
                convertedValue = "Sorry, that either isn't a commonly used ingredient or it's not in the database yet!";
              } else {
                convertedValue = `${value}g${ofof}${ingredient}`;
              }
          } else {
              convertedValue = `${o.amount} ${ingredient}`;
          }
        }

        return <div>{convertedValue}</div>;
    });
    return finalArr;
}

export default handleConversion;
