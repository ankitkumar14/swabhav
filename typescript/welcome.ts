//console.log()
//interface
/*interface person{
    fname:string,
    sname:string,
    hello:()=>string
}
var stud:person={fname:"fgh",sname:"tyu",hello:()=>{return "hello"}
}
console.log(stud.hello());
console.log("welcome to ts");
//class
class emp{
    name:string;
    sal:number;
    constructor(ty:string,pr:number){
        this.sal=pr;
        this.name=ty;
    }
    disp():void{
        console.log(this.sal);
    }
}
var xyz=new emp("rahul",100);
console.log(xyz.name);
xyz.disp();
//lambda function
var num=()=>{
console.log(67);
}
num();*/
abstract class person{
    name:string
    constructor (name:string)
    {
        this.name=name;
    }
    display():void{
        console.log(this.name);
    }
}
class employee extends person{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
        
    }
}
let emp=new employee("ram",1);
emp.display();