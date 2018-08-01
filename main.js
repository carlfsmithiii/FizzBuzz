let fizzbuzz = (upperLimit) => {
    let fullString = "";
    for (let i = 1; i <= upperLimit; i++) {
        let elementString = i.toString();
        if (i % 2 === 0) {
            elementString = "<span style='font-weight:bold'>" + elementString + "</span>";
        }
        if (i % 3 === 0) {
            elementString = "<span style='color:red'>" + elementString + "</span>";
        }
        if (i !== upperLimit) {
            elementString += ', ';
        }
        fullString += elementString;
    }

    document.write("<p>" + fullString + "</p>");
}

fizzbuzz(1000);