"use strict";
exports.__esModule = true;
exports.round = void 0;
function round(value, interval) {
    var v = Math.round(value);
    if (interval === 5) {
        var tenthValue = roundIntervalFive(v % 10);
        return Math.floor(v / 10) * 10 + tenthValue;
    }
    else if (interval === 10) {
        return Math.round(v / 10) * 10;
    }
    else {
        return v;
    }
}
exports.round = round;
function roundIntervalFive(tenth) {
    return intervalFive.get(tenth);
}
var intervalFive = new Map([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 10],
    [9, 10],
]);
