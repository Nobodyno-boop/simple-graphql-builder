export default class Mutation {
    private name;
    private data;
    private request;
    private args;
    private str;
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
    constructor(name: string, request: string, args?: object);
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
    get(obj: Mutation | any[] | object): Mutation;
    /**
     *
     * @param q **please dont touch**
     * @param args **please dont touch**
     */
    toString(q?: boolean, args?: any): String | undefined;
}
