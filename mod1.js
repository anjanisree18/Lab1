let name = "anjani";
let age = 20;
let course = "b.tech";

function display(){
    console.log("name: "+this.name +"age: "+this.age +"course: "+this.course);
}

export default display();
