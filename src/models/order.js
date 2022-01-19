"use strict";
exports.__esModule = true;
exports.ComplexOrderStrategyType = exports.InstructionType = exports.PositionEffect = exports.QuantityType = exports.CurrencyType = exports.PutCall = exports.OptionInstrumentType = exports.AssetType = exports.OrderLegType = exports.OrderStrategyType = exports.DurationType = exports.SessionType = exports.OrderType = exports.PriceLinkType = exports.TaxLotMethod = exports.PriceLinkBasis = exports.StopType = exports.StopPriceLinkType = exports.StopPriceLinkBasis = exports.RequestedDestination = void 0;
var RequestedDestination;
(function (RequestedDestination) {
    RequestedDestination["INET"] = "INET";
    RequestedDestination["ECN_ARCA"] = "ECN_ARCA";
    RequestedDestination["CBOE"] = "CBOE";
    RequestedDestination["AMEX"] = "AMEX";
    RequestedDestination["PHLX"] = "PHLX";
    RequestedDestination["ISE"] = "ISE";
    RequestedDestination["BOX"] = "BOX";
    RequestedDestination["NYSE"] = "NYSE";
    RequestedDestination["NASDAQ"] = "NASDAQ";
    RequestedDestination["BATS"] = "BATS";
    RequestedDestination["C2"] = "C2";
    RequestedDestination["AUTO"] = "AUTO";
})(RequestedDestination = exports.RequestedDestination || (exports.RequestedDestination = {}));
var StopPriceLinkBasis;
(function (StopPriceLinkBasis) {
    StopPriceLinkBasis["MANUAL"] = "MANUAL";
    StopPriceLinkBasis["BASE"] = "BASE";
    StopPriceLinkBasis["TRIGGER"] = "TRIGGER";
    StopPriceLinkBasis["LAST"] = "LAST";
    StopPriceLinkBasis["BID"] = "BID";
    StopPriceLinkBasis["ASK"] = "ASK";
    StopPriceLinkBasis["ASK_BID"] = "ASK_BID";
    StopPriceLinkBasis["MARK"] = "MARK";
    StopPriceLinkBasis["AVERAGE"] = "AVERAGE";
})(StopPriceLinkBasis = exports.StopPriceLinkBasis || (exports.StopPriceLinkBasis = {}));
var StopPriceLinkType;
(function (StopPriceLinkType) {
    StopPriceLinkType["VALUE"] = "VALUE";
    StopPriceLinkType["PERCENT"] = "PERCENT";
    StopPriceLinkType["TICK"] = "TICK";
})(StopPriceLinkType = exports.StopPriceLinkType || (exports.StopPriceLinkType = {}));
var StopType;
(function (StopType) {
    StopType["STANDARD"] = "STANDARD";
    StopType["BID"] = "BID";
    StopType["ASK"] = "ASK";
    StopType["LAST"] = "LAST";
    StopType["MARK"] = "MARK";
})(StopType = exports.StopType || (exports.StopType = {}));
var PriceLinkBasis;
(function (PriceLinkBasis) {
    PriceLinkBasis["MANUAL"] = "MANUAL";
    PriceLinkBasis["BASE"] = "BASE";
    PriceLinkBasis["TRIGGER"] = "TRIGGER";
    PriceLinkBasis["LAST"] = "LAST";
    PriceLinkBasis["BID"] = "BID";
    PriceLinkBasis["ASK"] = "ASK";
    PriceLinkBasis["ASK_BID"] = "ASK_BID";
    PriceLinkBasis["MARK"] = "MARK";
    PriceLinkBasis["AVERAGE"] = "AVERAGE";
})(PriceLinkBasis = exports.PriceLinkBasis || (exports.PriceLinkBasis = {}));
var TaxLotMethod;
(function (TaxLotMethod) {
    TaxLotMethod["FIFO"] = "";
    TaxLotMethod["LIFO"] = "";
    TaxLotMethod["HIGH_COST"] = "";
    TaxLotMethod["LOW_COST"] = "";
    TaxLotMethod["AVERAGE_COST"] = "";
    TaxLotMethod["SPECIFIC_LOT"] = "";
})(TaxLotMethod = exports.TaxLotMethod || (exports.TaxLotMethod = {}));
var PriceLinkType;
(function (PriceLinkType) {
    PriceLinkType["VALUE"] = "VALUE";
    PriceLinkType["PERCENT"] = "PERCENT";
    PriceLinkType["TICK"] = "TICK";
})(PriceLinkType = exports.PriceLinkType || (exports.PriceLinkType = {}));
var OrderType;
(function (OrderType) {
    OrderType["MARKET"] = "MARKET";
    OrderType["LIMIT"] = "LIMIT";
    OrderType["STOP"] = "STOP";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderType["TRAILING_STOP"] = "TRAILING_STOP";
    OrderType["MARKET_ON_CLOSE"] = "MARKET_ON_CLOSE";
    OrderType["EXERCISE"] = "EXERCISE";
    OrderType["TRAILING_STOP_LIMIT"] = "TRAILING_STOP_LIMIT";
    OrderType["NET_DEBIT"] = "NET_DEBIT";
    OrderType["NET_CREDIT"] = "NET_CREDIT";
    OrderType["NET_ZERO"] = "NET_ZERO";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var SessionType;
(function (SessionType) {
    SessionType["NORMAL"] = "NORMAL";
    SessionType["AM"] = "AM";
    SessionType["PM"] = "PM";
    SessionType["SEAMLESS"] = "SEAMLESS";
})(SessionType = exports.SessionType || (exports.SessionType = {}));
var DurationType;
(function (DurationType) {
    DurationType["DAY"] = "DAY";
    DurationType["GOOD_TILL_CANCEL"] = "GOOD_TILL_CANCEL";
    DurationType["FILL_OR_KILL"] = "FILL_OR_KILL";
})(DurationType = exports.DurationType || (exports.DurationType = {}));
var OrderStrategyType;
(function (OrderStrategyType) {
    OrderStrategyType["SINGLE"] = "SINGLE";
    OrderStrategyType["OCO"] = "OCO";
    OrderStrategyType["TRIGGER"] = "TRIGGER";
})(OrderStrategyType = exports.OrderStrategyType || (exports.OrderStrategyType = {}));
var OrderLegType;
(function (OrderLegType) {
    OrderLegType["EQUITY"] = "EQUITY";
    OrderLegType["OPTION"] = "OPTION";
    OrderLegType["INDEX"] = "INDEX";
    OrderLegType["MUTUAL_FUND"] = "MUTUAL_FUND";
    OrderLegType["CASH_EQUIVALENT"] = "CASH_EQUIVALENT";
    OrderLegType["FIXED_INCOME"] = "FIXED_INCOME";
    OrderLegType["CURRENCY"] = "CURRENCY";
})(OrderLegType = exports.OrderLegType || (exports.OrderLegType = {}));
var AssetType;
(function (AssetType) {
    AssetType["EQUITY"] = "EQUITY";
    AssetType["OPTION"] = "OPTION";
    AssetType["INDEX"] = "INDEX";
    AssetType["MUTUAL_FUND"] = "MUTUAL_FUND";
    AssetType["CASH_EQUIVALENT"] = "CASH_EQUIVALENT";
    AssetType["FIXED_INCOME"] = "FIXED_INCOME";
    AssetType["CURRENCY"] = "CURRENCY";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var OptionInstrumentType;
(function (OptionInstrumentType) {
    OptionInstrumentType["VANILLA"] = "VANILLA";
    OptionInstrumentType["BINARY"] = "BINARY";
    OptionInstrumentType["BARRIER"] = "BARRIER";
})(OptionInstrumentType = exports.OptionInstrumentType || (exports.OptionInstrumentType = {}));
var PutCall;
(function (PutCall) {
    PutCall["PUT"] = "PUT";
    PutCall["CALL"] = "CALL";
})(PutCall = exports.PutCall || (exports.PutCall = {}));
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["USD"] = "USD";
    CurrencyType["CAD"] = "CAD";
    CurrencyType["EUR"] = "EUR";
    CurrencyType["JPY"] = "JPY";
})(CurrencyType = exports.CurrencyType || (exports.CurrencyType = {}));
var QuantityType;
(function (QuantityType) {
    QuantityType["ALL_SHARES"] = "ALL_SHARES";
    QuantityType["DOLLARS"] = "DOLLARS";
    QuantityType["SHARES"] = "SHARES";
})(QuantityType = exports.QuantityType || (exports.QuantityType = {}));
var PositionEffect;
(function (PositionEffect) {
    PositionEffect["OPENING"] = "OPENING";
    PositionEffect["CLOSING"] = "CLOSING";
    PositionEffect["AUTOMATIC"] = "AUTOMATIC";
})(PositionEffect = exports.PositionEffect || (exports.PositionEffect = {}));
var InstructionType;
(function (InstructionType) {
    InstructionType["BUY"] = "BUY";
    InstructionType["SELL"] = "SELL";
    InstructionType["BUY_TO_COVER"] = "BUY_TO_COVER";
    InstructionType["SELL_SHORT"] = "SELL_SHORT";
    InstructionType["BUY_TO_OPEN"] = "BUY_TO_OPEN";
    InstructionType["BUY_TO_CLOSE"] = "BUY_TO_CLOSE";
    InstructionType["SELL_TO_OPEN"] = "SELL_TO_OPEN";
    InstructionType["SELL_TO_CLOSE"] = "SELL_TO_CLOSE";
    InstructionType["EXCHANGE"] = "EXCHANGE";
})(InstructionType = exports.InstructionType || (exports.InstructionType = {}));
var ComplexOrderStrategyType;
(function (ComplexOrderStrategyType) {
    ComplexOrderStrategyType["NONE"] = "NONE";
    ComplexOrderStrategyType["COVERED"] = "COVERED";
    ComplexOrderStrategyType["VERTICAL"] = "VERTICAL";
    ComplexOrderStrategyType["BACK_RATIO"] = "BACK_RATIO";
    ComplexOrderStrategyType["CALENDAR"] = "CALENDAR";
    ComplexOrderStrategyType["DIAGONAL"] = "DIAGONAL";
    ComplexOrderStrategyType["STRADDLE"] = "STRADDLE";
    ComplexOrderStrategyType["STRANGLE"] = "STRANGLE";
    ComplexOrderStrategyType["COLLAR_SYNTHETIC"] = "COLLAR_SYNTHETIC";
    ComplexOrderStrategyType["BUTTERFLY"] = "BUTTERFLY";
    ComplexOrderStrategyType["CONDOR"] = "CONDOR";
    ComplexOrderStrategyType["IRON_CONDOR"] = "IRON_CONDOR";
    ComplexOrderStrategyType["VERTICAL_ROLL"] = "VERTICAL_ROLL";
    ComplexOrderStrategyType["COLLAR_WITH_STOCK"] = "COLLAR_WITH_STOCK";
    ComplexOrderStrategyType["DOUBLE_DIAGONAL"] = "DOUBLE_DIAGONAL";
    ComplexOrderStrategyType["UNBALANCED_BUTTERFLY"] = "UNBALANCED_BUTTERFLY";
    ComplexOrderStrategyType["UNBALANCED_CONDOR"] = "UNBALANCED_CONDOR";
    ComplexOrderStrategyType["UNBALANCED_IRON_CONDOR"] = "UNBALANCED_IRON_CONDOR";
    ComplexOrderStrategyType["UNBALANCED_VERTICAL_ROLL"] = "UNBALANCED_VERTICAL_ROLL";
    ComplexOrderStrategyType["CUSTOM"] = "CUSTOM";
})(ComplexOrderStrategyType = exports.ComplexOrderStrategyType || (exports.ComplexOrderStrategyType = {}));
