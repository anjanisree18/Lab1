class games{
    constructor(game,type){
        this.game = game;
        this.type = type;
    }
    print(){
        console.log("game is:"+this.game+" and its type is: "+this.type);
    }
}

let g = new games("chess","indoor");
g.print();