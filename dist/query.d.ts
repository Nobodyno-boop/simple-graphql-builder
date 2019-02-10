export default class Query {
    private name;
    private data;
    private args;
    /**
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
     * @param name The name of the query
     * @param args The args of the query by default no value
     */
    constructor(name: string, args?: object);
    /**
     * Sample use
     *
     * ```typescript
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
     * @param obj
     * @return Return the Query instance
     */
    get(obj: any): Query;
    toString(q?: boolean, args?: any): string | undefined;
}
