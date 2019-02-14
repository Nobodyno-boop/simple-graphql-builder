export default class Str {
    private str: string;
    
    constructor(){
        this.str = "";
    }

    public append(str: any) {
        this.str += str;
    }

    public removeLastChar(){
        this.str = this.str.slice(0, -1);
    }

    public toString(): String {
        return this.str;
    }
}