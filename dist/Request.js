"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Str_1 = require("./Str");
class Mutation {
    /**
     * Simple exemple with no data
     *
     *  # Mutation
     * ```typescript
     *  let mutation = new Mutation("sign_up", {email: "randommail@mail.fr", password:"secretPassword"});
     *
     * //But not interest to make that...
     * ```
     *
     * Simple exemple with sample data
     *
     * ```typescript
     *  let mutation = new Mutation("sign_up", {email: "randommail@mail.fr", password:"secretPassword"}).get(["pseudo", "id"]);
     *
     * // mutation.toString() is equal to :
     * // mutation {
     * //   sign_up(email: "randommail@mail.fr", password:"secretPassword"){
     * //       pseudo, id
     * //   }
     * // }
     *
     * ```
     *
     * # Query
     *
     * Simple exemple with no data
     *
     * ```typescript
     *  let query = new Query("login", {email: "randommail@mail.fr", password:"secretPassword"});
     *
     * //But not interest to make that...
     * ```
     *
     * Simple exemple with sample data
     *
     * ```typescript
     *  let query = new Query("login", {email: "randommail@mail.fr", password:"secretPassword"}).get(["pseudo", "id"]);
     *
     * // query.toString() is equal to :
     * // query {
     * //   login(email: "randommail@mail.fr", password:"secretPassword"){
     * //       pseudo, id
     * //   }
     * // }
     * ```
     *
     *
     * @param name The name of the query
     * @param args The args of the query by default no value
     */
    constructor(name, request, args = { ___null: -1 }) {
        this.name = name;
        this.request = request;
        if (args["___null"] == -1) {
            this.args = null;
        }
        else if (typeof args === "object") {
            this.args = args;
        }
        else
            this.args = null;
        this.str = new Str_1.default();
    }
    /**
     *  # Mutation
     * Sample use
     *
     * ```typescript
     *  let mutation = new Mutation("sign_up", {email: "randommail@mail.fr", password:"secretPassword"});
     *  mutation.get(["id", "pseudo", "credits"]);
     *
     * // mutation.toString() is equal to :
     * // mutation {
     * //   sign_up(email: "randommail@mail.fr", password:"secretPassword"){
     * //       id, pseudo, credits
     * //   }
     * // }
     *
     * ```
     *
     * Some Sample
     *
     * ```typescript
     *  let mutation = new Mutation("shop_buy", {ShopUserID: 1});
     *  let shop = new Mutation("response").get(["isOK", {items: ["name", "price"]}]) // is equal to {response: "isOK"}
     *  mutation.get(shop);
     *
     *
     *
     * // mutation.toString() is equal to :
     * // mutation {
     * //   shop_buy(ShopUserID: 1){
     * //       response{
     * //           isOk,
     * //           items{
     * //               name, price
     * //           }
     * //       }
     * //   }
     * // }
     * ```
     *  # Query
     *
     * Sample use
     *
     * ```typescript
     *
     *  let query = new Query("login", {email: "randommail@mail.fr", password:"secretPassword"});
     *  query.get(["id", "pseudo", "credits"]);
     *
     * // query.toString() is equal to :
     * // query {
     * //   login(email: "randommail@mail.fr", password:"secretPassword"){
     * //       id, pseudo, credits
     * //   }
     * // }
     *
     * ```
     *
     * Some Sample
     *
     * ```typescript
     *
     *  let query = new Query("shop_show", {ShopUserID: 1});
     *  let shop = new Query("response").get(["shopName", {items: ["name", "price"]}]) // is equal to {response: "isOK"}
     *  query.get(shop);
     *
     * // query.toString() is equal to :
     * // query {
     * //   shop_show(ShopUserID: 1){
     * //       response{
     * //           shopName,
     * //           items{
     * //               name, price
     * //           }
     * //       }
     * //   }
     * // }
     * ```
     *
     * @param obj
     * @return Return the Mutation instance
     */
    get(obj) {
        this.data = obj;
        return this;
    }
    /**
     *
     * @param q **please dont touch**
     * @param args **please dont touch**
     */
    toString(q = false, args = {}) {
        let str = this.str;
        if (!q) {
            str.append(`${this.request}{${this.name}`);
            if (this.args != null) {
                str.append("(");
                for (const key in this.args) {
                    if (this.args.hasOwnProperty(key)) {
                        const element = this.args[key];
                        if (typeof element == "string") {
                            str.append(`${key}:"${element}",`);
                        }
                        else
                            str.append(`${key}:"${element}",`);
                    }
                }
                str.removeLastChar();
                str.append("){");
            }
            else
                str.append("{");
            if (Array.isArray(this.data)) {
                for (const key in this.data) {
                    if (this.data.hasOwnProperty(key)) {
                        const element = this.data[key];
                        if (typeof element == "object" && element instanceof Mutation) {
                            str.append(element.toString(true, element));
                        }
                        else if (typeof element == "object") {
                            str.append(this.toString(true, element));
                        }
                        else
                            str.append(element + ",");
                    }
                }
            }
            else if (this.data instanceof Mutation && typeof this.data == "object") {
                str.append(this.data.toString(true, this.data));
            }
            else if (typeof this.data == "object") {
                let t = new Str_1.default();
                for (const key in this.data) {
                    if (this.data.hasOwnProperty(key)) {
                        let element = this.data[key];
                        if (Array.isArray(element)) {
                            t.append(`${key} {`);
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                if (i + 1 == element.length) {
                                    t.append(`${el}`);
                                }
                                else {
                                    t.append(`${el},`);
                                }
                            }
                            t.append(`},`);
                        }
                    }
                }
                str.append(t.toString());
            }
            str.removeLastChar();
            str.append("}}");
        }
        else {
            if (typeof args == "object" && args instanceof Mutation) {
                str.append(args.name + "{");
                for (const key in args.data) {
                    if (args.data.hasOwnProperty(key)) {
                        const element = args.data[key];
                        if (typeof element == "object" && element instanceof Mutation) {
                            str.append(element.toString(true, element));
                        }
                        else if (typeof element == "object") {
                            str.append(this.toString(true, element));
                        }
                        else
                            str.append(element + ",");
                    }
                }
                str.removeLastChar();
                str.append("},");
                return str.toString();
            }
            else if (typeof args == "object") {
                let t = new Str_1.default();
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        let element = args[key];
                        if (Array.isArray(element)) {
                            t.append(`${key} {`);
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                if (i + 1 == element.length) {
                                    t.append(`${el}`);
                                }
                                else {
                                    t.append(`${el},`);
                                }
                            }
                            t.append(`},`);
                        }
                    }
                }
                return t.toString();
            }
        }
        if (!q) {
            return str.toString();
        }
    }
}
exports.default = Mutation;
