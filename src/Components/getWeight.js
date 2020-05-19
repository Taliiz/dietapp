import cupweights from "./cupweights";

function getWeight(ingredient, unit, amount) {
    const ing = ingredient.replace(/[\s-]/gi, "").toLowerCase();

    const u = unit.toLowerCase();
    const regex = /(\d+)(.*)(\d+)/g

    let cupWeight;

    let weight;

    for (const key of Object.keys(cupweights)) {
        if (ing.indexOf(key) > -1) {
            cupWeight = cupweights[key];
        }
    }

    if (typeof(amount) === "string") {
      let matches = regex.exec(amount)
      let amountArr = [matches[1], matches[3]].map((am) => weightOf(am))
      weight =`${amountArr[0]}${matches[2]}${amountArr[1]}`
    } else {
      weight = weightOf(amount)
    }

    function weightOf(amount) {
      let weight

      if (u.indexOf("cup") > -1) {
          weight = parseInt(cupWeight * amount);
      } else if (u.indexOf("tablespoon") > -1 || u.indexOf("tbsp") > -1) {
          weight = cupWeight * 0.0625 * amount;
      } else if (u.indexOf("teaspoon") > -1 || u.indexOf("tsp") > -1) {
          weight = cupWeight * 0.0208 * amount;
      } else if (u.indexOf("ounce") > -1 || u.indexOf("oz") > -1) {
        weight = amount * 28.35
      }

      if (weight > 10) {
          weight = weight.toFixed(0);
      } else {
          weight = weight.toFixed(1);
      }
      return weight
    }
    return weight;
}

export default getWeight;
