"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mutation {
    /**
     * Simple exemple with no data
     *
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
     * ```
     *
     * @param name The name of the query
     * @param args The args of the query by default no value
     */
    constructor(name, args = {}) {
        this.name = name;
        if (args == {}) {
            this.args = null;
        }
        else
            this.args = args;
    }
    /**
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
        let tstr = "";
        if (!q) {
            tstr = tstr + "mutation{" + this.name;
            if (this.args != null) {
                // console.log(this.args);
                tstr = tstr + "(";
                for (const key in this.args) {
                    if (this.args.hasOwnProperty(key)) {
                        const element = this.args[key];
                        if (typeof element == "string") {
                            tstr = tstr + key + ":\"" + element + "\",";
                        }
                        else
                            tstr = tstr + key + ":" + element + ",";
                    }
                }
                tstr = tstr.slice(0, -1);
                tstr = tstr + "){";
            }
            else
                tstr = tstr + "{";
            if (Array.isArray(this.data)) {
                for (const key in this.data) {
                    if (this.data.hasOwnProperty(key)) {
                        const element = this.data[key];
                        if (typeof element == "object" && element instanceof Mutation) {
                            tstr = tstr + element.toString(true, element);
                        }
                        else if (typeof element == "object") {
                            tstr = tstr + this.toString(true, element);
                        }
                        else
                            tstr = tstr + element + ",";
                    }
                }
            }
            else if (this.data instanceof Mutation && typeof this.data == "object") {
                tstr = tstr + this.data.toString(true, this.data);
            }
            else if (typeof this.data == "object") {
                let t = "";
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        let element = args[key];
                        if (Array.isArray(element)) {
                            t = t + key + "{";
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                t = t + el + ",";
                            }
                            t = t + "},";
                        }
                    }
                }
                tstr = tstr + t;
            }
            tstr = tstr.slice(0, -1);
            tstr = tstr + "}}";
        }
        else {
            if (typeof args == "object" && args instanceof Mutation) {
                tstr = args.name + "{";
                for (const key in args.data) {
                    if (args.data.hasOwnProperty(key)) {
                        const element = args.data[key];
                        if (typeof element == "object" && element instanceof Mutation) {
                            tstr = tstr + element.toString(true, element);
                        }
                        else if (typeof element == "object") {
                            tstr = tstr + this.toString(true, element);
                        }
                        else
                            tstr = tstr + element + ",";
                    }
                }
                tstr = tstr.slice(0, -1);
                tstr = tstr + "},";
                return tstr;
            }
            else if (typeof args == "object") {
                let t = "";
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        let element = args[key];
                        if (Array.isArray(element)) {
                            t = t + key + "{";
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                t = t + el + ",";
                            }
                            t = t.slice(0, -1);
                            t = t + "},";
                        }
                    }
                }
                return t;
            }
        }
        if (!q) {
            return tstr;
        }
    }
}
exports.default = Mutation;
