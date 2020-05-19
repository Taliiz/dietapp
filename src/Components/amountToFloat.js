function amountToFloat(o) {
    let amountNumberValue = 0;
    let am = o.amount.replace(/\u2009/g, " ");
    let amount = am.split(" ");

    for (const a of amount) {
        if ((a === "¼") | (a === "1/4")) {
            amountNumberValue = (
                parseFloat(amountNumberValue) + parseFloat(0.25)
            ).toFixed(3);
        } else if ((a === "⅓") | (a === "1/3")) {
            amountNumberValue = (
                parseFloat(amountNumberValue) + parseFloat(0.333)
            ).toFixed(3);
        } else if ((a === "½") | (a === "1/2")) {
            amountNumberValue = (
                parseFloat(amountNumberValue) + parseFloat(0.5)
            ).toFixed(3);
        } else if ((a === "⅔") | (a === "2/3")) {
            amountNumberValue = (
                parseFloat(amountNumberValue) + parseFloat(0.666)
            ).toFixed(3);
        } else if ((a === "¾") | (a === "3/4")) {
            amountNumberValue = (
                parseFloat(amountNumberValue) + parseFloat(0.75)
            ).toFixed(3);
        } else {
            amountNumberValue += parseFloat(a);
        }
    }
    return parseFloat(amountNumberValue);
}

export default amountToFloat;
