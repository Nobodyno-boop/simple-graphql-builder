"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("./Request");
class Query extends Request_1.default {
    constructor(name, args = { ___null: -1 }) {
        super(name, "query", args);
    }
}
exports.default = Query;
