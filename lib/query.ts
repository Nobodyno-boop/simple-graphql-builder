import Request from "./Request"
export default class Query extends Request {

    constructor(name: string, args: object = {___null:-1}){
        super(name, "query", args);
    }



}



