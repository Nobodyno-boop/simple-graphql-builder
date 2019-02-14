"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = require("./Request");
class Mutation extends Request_1.default {
    /**
     *  # Mutation
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
     * # Query
     * ```typescript
     *
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
     *
     * @param name The name of the query
     * @param args The args of the query by default no value
     */
    constructor(name, args = { ___null: -1 }) {
        super(name, "mutation", args);
    }
}
exports.default = Mutation;
