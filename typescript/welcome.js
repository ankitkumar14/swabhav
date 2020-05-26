var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.display = function () {
        console.log(this.name);
    };
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    return employee;
}(person));
var emp = new employee("ram", 1);
emp.display();
