"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AuthorizationTokenInterceptor = void 0;
var authenticate_1 = require("../api/authenticate");
var routes_config_1 = require("./routes.config");
var interceptor_1 = require("./interceptor");
var client_1 = require("./client");
var MAX_RETRIES = 1;
var AuthorizationTokenInterceptor = /** @class */ (function (_super) {
    __extends(AuthorizationTokenInterceptor, _super);
    function AuthorizationTokenInterceptor(credentialProvider) {
        var _this = _super.call(this) || this;
        _this.credentialProvider = credentialProvider;
        _this.authTokenRefreshRetries = MAX_RETRIES;
        return _this;
    }
    AuthorizationTokenInterceptor.prototype.onSuccessRequestHandler = function (config) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes(routes_config_1.AUTHENTICATION)) || ((_b = config.url) === null || _b === void 0 ? void 0 : _b.includes(routes_config_1.OAUTH2_TOKEN)))
                            return [2 /*return*/, config];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        accessToken = _c.sent();
                        config.headers.Authorization = "Bearer ".concat(accessToken);
                        return [2 /*return*/, config];
                }
            });
        });
    };
    AuthorizationTokenInterceptor.prototype.onErrorResponseHandler = function (error) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var config, response, secondResponse;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        config = error.config, response = error.response;
                        if (((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes(routes_config_1.OAUTH2_TOKEN)) || ((_b = config.url) === null || _b === void 0 ? void 0 : _b.includes(routes_config_1.AUTHENTICATION)))
                            return [2 /*return*/, error];
                        if (!((response === null || response === void 0 ? void 0 : response.status) === 401 && this.authTokenRefreshRetries > 0)) return [3 /*break*/, 3];
                        this.authTokenRefreshRetries--;
                        return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, client_1["default"].connect(config)];
                    case 2:
                        secondResponse = _c.sent();
                        this.resetAuthTokenRefreshRetries();
                        return [2 /*return*/, secondResponse];
                    case 3: throw error;
                }
            });
        });
    };
    AuthorizationTokenInterceptor.prototype.resetAuthTokenRefreshRetries = function () {
        this.authTokenRefreshRetries = MAX_RETRIES;
    };
    AuthorizationTokenInterceptor.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider.getCredential()];
                    case 1:
                        access_token = (_a.sent()).access_token;
                        return [2 /*return*/, access_token];
                }
            });
        });
    };
    AuthorizationTokenInterceptor.prototype.getAccessType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, refresh_token_modified_date, refresh_token_expires_in, expiredDate, now;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider.getCredential()];
                    case 1:
                        _a = _b.sent(), refresh_token_modified_date = _a.refresh_token_modified_date, refresh_token_expires_in = _a.refresh_token_expires_in;
                        expiredDate = refresh_token_modified_date + refresh_token_expires_in * 1000 * 0.9;
                        now = Date.now();
                        if (!expiredDate || now >= expiredDate)
                            return [2 /*return*/, authenticate_1.AccessType.OFFLINE];
                        else
                            return [2 /*return*/, authenticate_1.AccessType.NONE];
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthorizationTokenInterceptor.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, client_id, redirect_uri, refresh_token, accessType, credential, now, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider.getCredential()];
                    case 1:
                        _a = _c.sent(), client_id = _a.client_id, redirect_uri = _a.redirect_uri, refresh_token = _a.refresh_token;
                        return [4 /*yield*/, this.getAccessType()];
                    case 2:
                        accessType = _c.sent();
                        return [4 /*yield*/, (0, authenticate_1.oauth)({
                                client_id: client_id,
                                redirect_uri: redirect_uri,
                                refresh_token: refresh_token,
                                grant_type: authenticate_1.GrantType.REFRESH_TOKEN,
                                access_type: accessType
                            })];
                    case 3:
                        credential = _c.sent();
                        now = Date.now();
                        _b = accessType;
                        switch (_b) {
                            case authenticate_1.AccessType.OFFLINE: return [3 /*break*/, 4];
                            case authenticate_1.AccessType.NONE: return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 4: return [4 /*yield*/, this.credentialProvider.updateCredential(__assign(__assign({}, credential), { access_token_modified_date: now, refresh_token_modified_date: now }))];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.credentialProvider.updateCredential(__assign(__assign({}, credential), { access_token_modified_date: now }))];
                    case 7:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return AuthorizationTokenInterceptor;
}(interceptor_1.Interceptor));
exports.AuthorizationTokenInterceptor = AuthorizationTokenInterceptor;
