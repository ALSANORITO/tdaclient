"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var connect_1 = require("../models/connect");
var qs = require("qs");
var Client = /** @class */ (function () {
    function Client() {
        this.client = axios_1["default"].create();
        if (Client.instance) {
            return Client.instance;
        }
        else {
            Client.instance = this;
            return this;
        }
    }
    Client.getInstance = function () {
        if (!Client.instance)
            return new Client();
        return Client.instance;
    };
    Client.prototype.addInterceptor = function (interceptor) {
        this.client.interceptors.request.use(interceptor.onSuccessRequestHandler.bind(interceptor), interceptor.onErrorRequestHandler.bind(interceptor));
        this.client.interceptors.response.use(interceptor.onSuccessResponseHandler.bind(interceptor), interceptor.onErrorResponseHandler.bind(interceptor));
        return this;
    };
    Client.prototype.get = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = __assign(__assign({}, request), { method: connect_1.RestMethod.GET, paramsSerializer: function (params) { return qs.stringify(params, { arrayFormat: request.arrayFormat }); } });
                        return [4 /*yield*/, this.connect(config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.post = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = __assign(__assign({}, request), { method: connect_1.RestMethod.POST });
                        Client.handleResponseType(config);
                        return [4 /*yield*/, this.connect(config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.del = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = __assign(__assign({}, request), { method: connect_1.RestMethod.DELETE });
                        Client.handleResponseType(config);
                        return [4 /*yield*/, this.connect(config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.connect = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = config || {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.client(config)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        message = "Failed to ".concat(config.method, " ").concat(config.url, ".\n").concat(error_1, ".");
                        if (error_1 && error_1.response && error_1.response.data)
                            message += "\nResponse from server ".concat(JSON.stringify(error_1.response.data, null, '\t'));
                        message += "\nRequest config: ".concat(JSON.stringify(config, null, '\t'));
                        // @ts-ignore
                        throw new Error(message, { cause: error_1 });
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Client.handleResponseType = function (config) {
        var requestType = config.responseType;
        switch (requestType) {
            case connect_1.ResponseType.URL_FORM_ENCODED:
                var header = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                config.headers = config.headers || {};
                config.headers = __assign(__assign({}, config.headers), header);
                config.data = qs.stringify(config.data);
        }
    };
    return Client;
}());
exports["default"] = Client.getInstance();
