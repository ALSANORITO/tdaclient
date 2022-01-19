"use strict";
exports.__esModule = true;
exports.convertToValidSymbols = exports.convertToValidSymbol = exports.symbolMap = void 0;
exports.symbolMap = new Map([['SPX', '$SPX.X']]);
function convertToValidSymbol(symbol) {
    if (exports.symbolMap.has(symbol)) {
        return exports.symbolMap.get(symbol);
    }
    else {
        return symbol;
    }
}
exports.convertToValidSymbol = convertToValidSymbol;
function convertToValidSymbols(symbols) {
    return symbols.map(function (symbol) {
        return convertToValidSymbol(symbol);
    });
}
exports.convertToValidSymbols = convertToValidSymbols;
