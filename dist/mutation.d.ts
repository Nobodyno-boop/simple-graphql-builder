export default class Mutation {
    private name;
    private data;
    private args;
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
    constructor(name: string, args?: object);
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
    get(obj: Mutation | any[] | object): Mutation;
    /**
     *
     * @param q **please dont touch**
     * @param args **please dont touch**
     */
    toString(q?: boolean, args?: any): string | undefined;
}
