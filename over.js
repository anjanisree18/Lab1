class person{
    constructor(gender){
        this.gender=gender;
    }
    show(){
        console.log("gender:"+this.gender);
    }
}
class teacher extends person{
    constructor(gender,age){
        super(gender);
        this.age=age;
    }
    display(){
        console.log("person is a "+this.gender+" with age "+this.age);
    }
}
let m=new teacher("female",30);
m.show();
m.display();