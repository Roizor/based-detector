function bD(based) {
    let seed = Math.random().toString().substring(2,5);
    if(seed > 315 && based.length > 0) return "based";
    return "not based";
}

function bP() {
    let percent = Math.random().toString().substring(2,5)/ 100 * 10 .toString().split(".")[0];
    return percent+"% based";
}

module.exports = {
    basedDetector: bD,
    basedPercent: bP
}