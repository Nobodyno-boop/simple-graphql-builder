export default class Query {
    private name:string;
    private data: any;
    private args: any;
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
    constructor(name: string, args: object = {___null:-1}){
        this.name = name;
        if(args["___null"] == -1){
            this.args = null;
        } else this.args = args; 
    }

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
    get(obj:any) : Query{
        this.data = obj;
        return this;
    }

    public toString(q :boolean = false, args:any = {})  {
        let tstr = "";
        if(!q){
            tstr = tstr+ "query{"+ this.name;   
            if(this.args != null ){
                // console.log(this.args);
                tstr = tstr + "("
                for (const key in this.args) {
                    if (this.args.hasOwnProperty(key)) {
                        const element = this.args[key];
                        if(typeof element == "string"){
                            tstr = tstr +key+":\""+ element + "\","
                        } else tstr = tstr +key+":"+ element + ",";
                    }
                }
                tstr = tstr.slice(0, -1);
                tstr = tstr + "){"
            } else tstr = tstr + "{"
            if(Array.isArray(this.data)){
                for (const key in this.data) {
                    if (this.data.hasOwnProperty(key)) {
                        const element = this.data[key];
                        if(typeof element == "object" && element instanceof Query){
                            tstr = tstr + element.toString(true, element);
                            // console.log(element.toString(true, element));
                        } else if (typeof element == "object"){
                            tstr = tstr + this.toString(true, element);    
                            // console.log(this.toString(true, element));

                        } else tstr = tstr + element + ","
                    }
                }
            } else if (typeof this.data == "object" && this.data instanceof Query){
                tstr = tstr + this.data.toString(true, this.data);
            } else if(typeof this.data == "object"){
                let t = "";
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        let element = args[key];
                        if(Array.isArray(element)){
                            t = t + key + "{"
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                t = t + el + ","
                            }
                            t = t + "},"
                        }
                    }
                }
                tstr = tstr + t
            }
            tstr = tstr.slice(0, -1);
            tstr = tstr + "}}"
        } else {
            if(typeof args == "object" && args instanceof Query){
                tstr = args.name + "{";
                for (const key in args.data) {
                    if (args.data.hasOwnProperty(key)) {
                        const element = args.data[key];
                        if(typeof element == "object" && element instanceof Query){
                            tstr = tstr + element.toString(true, element);
                        } else if (typeof element == "object"){
                            tstr = tstr + this.toString(true, element);                            
                        } else tstr = tstr + element + ","
                    }
                }
                tstr = tstr.slice(0, -1);
                tstr = tstr + "},";
                return tstr;
            } else if(typeof args == "object"){
                let t = "";
                
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        let element = args[key];
                        if(Array.isArray(element)){
                            t = t + key + "{"
                            for (let i = 0; i < element.length; i++) {
                                let el = element[i];
                                t = t + el + ","
                            }
                            t = t.slice(0,-1);
                            t = t + "},"
                        }
                    }
                }
                return t;
            }
        }

        if(!q){
            return tstr;
        }

    }
}



