"use strict";
exports.__esModule = true;
exports.OptionType = exports.Month = exports.RangeType = exports.OptionStrategyType = exports.ContractType = void 0;
var ContractType;
(function (ContractType) {
    ContractType["CALL"] = "CALL";
    ContractType["PUT"] = "PUT";
    ContractType["ALL"] = "ALL";
})(ContractType = exports.ContractType || (exports.ContractType = {}));
var OptionStrategyType;
(function (OptionStrategyType) {
    OptionStrategyType["SINGLE"] = "SINGLE";
    OptionStrategyType["ANALYTICAL"] = "ANALYTICAL";
    OptionStrategyType["COVERED"] = "COVERED";
    OptionStrategyType["VERTICAL"] = "VERTICAL";
    OptionStrategyType["CALENDER"] = "CALENDER";
    OptionStrategyType["STRANGLE"] = "STRANGLE";
    OptionStrategyType["STRADDLE"] = "STRADDLE";
    OptionStrategyType["BUTTERFLY"] = "BUTTERFLY";
    OptionStrategyType["CONDOR"] = "CONDOR";
    OptionStrategyType["DIAGONAL"] = "DIAGONAL";
    OptionStrategyType["COLLAR"] = "COLLAR";
    OptionStrategyType["ROLL"] = "ROLL";
})(OptionStrategyType = exports.OptionStrategyType || (exports.OptionStrategyType = {}));
var RangeType;
(function (RangeType) {
    RangeType["ITM"] = "ITM";
    RangeType["NTM"] = "NTM";
    RangeType["OTM"] = "OTM";
    RangeType["SAK"] = "SAK";
    RangeType["SBK"] = "SBK";
    RangeType["SNK"] = "SNK";
    RangeType["ALL"] = "ALL";
})(RangeType = exports.RangeType || (exports.RangeType = {}));
var Month;
(function (Month) {
    Month["JAN"] = "JAN";
    Month["FEB"] = "FEB";
    Month["MAR"] = "MAR";
    Month["APR"] = "APR";
    Month["MAY"] = "MAY";
    Month["JUN"] = "JUN";
    Month["JUL"] = "JUL";
    Month["AUG"] = "AUG";
    Month["SEP"] = "SEP";
    Month["OCT"] = "OCT";
    Month["NOV"] = "NOV";
    Month["DEC"] = "DEC";
})(Month = exports.Month || (exports.Month = {}));
var OptionType;
(function (OptionType) {
    OptionType["S"] = "S";
    OptionType["NS"] = "NS";
    OptionType["ALL"] = "ALL";
})(OptionType = exports.OptionType || (exports.OptionType = {}));
