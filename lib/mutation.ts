import Request from "./Request";
export default class Mutation extends Request {
    constructor(name: string, args: object = {___null:-1}){
        super(name, "mutation", args);
    }
}