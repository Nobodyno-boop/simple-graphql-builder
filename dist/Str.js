"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Str {
    constructor() {
        this.str = "";
    }
    append(str) {
        this.str += str;
    }
    removeLastChar() {
        this.str = this.str.slice(0, -1);
    }
    toString() {
        return this.str;
    }
}
exports.default = Str;
