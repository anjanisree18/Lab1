class animal{
    type = "mammel";
    // constructor(type){
    //     this.type=type;
    // }
    display(){
        console.log("type of animal: "+this.type);
    }
}

class dog extends animal{
    display1(){
        console.log("animal is a dog");
    }
}

let a = new dog();
a.display();
a.display1();