"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("./Request");
class Mutation extends Request_1.default {
    constructor(name, args = { ___null: -1 }) {
        super(name, "mutation", args);
    }
}
exports.default = Mutation;
