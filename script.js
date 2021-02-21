function compute() {
    var principalEl = document.getElementById("principal");
    var principal = principalEl.value;

    if (principal < 1) {
        alert("Enter a positive number");
        principalEl.focus();
        return
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var futureYear = new Date().getFullYear() + Number(years);


    var htmlContent = `
        If you deposit <mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}% </mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${futureYear}</mark>`;

    document.getElementById("result").innerHTML = htmlContent;

}


function writeRange() {
    var rate = document.getElementById("rate").value;
    rate = rate + " %";
    document.getElementById("rate-value").innerHTML = rate
}