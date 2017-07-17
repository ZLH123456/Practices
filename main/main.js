"use strict";
class Person1{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
class workers extends  Person1{
    constructor(name,age){
        super(name,age);
    }
    introduces(){
        return `${this.introduce()} I am a Worker. I have a job.`
    }
}
class Teachers extends Person1{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduces (){
        if(this.klass){
            return `${this.introduce()} I am a Teacher. I teach Class ${this.klass}.`
        }else{
            return `${this.introduce()} I am a Teacher. I teach no Class.`
        }
    }
    introducewith(student){
         if(student.klass===this.klass){
             return `${this.introduce()} I am a Teacher. I teach ${student.name}.`
         }else{
             return `${this.introduce()} I am a Teacher. I dont teach ${student.name}.`
         }
    }
    classInform(student,klass,action){
        if(action==='join'){
            console.log(`I am ${this.name}. I know ${student} has joined Class ${klass}.`)
        }
        if(action==='leader'){
            console.log(`I am ${this.name}. I know ${student} become Leader of Class ${klass}.`);
        }
    }
}
class student1 extends Person1{
     constructor(id,name,age,Class){
         super(id,name,age);
         this.klass=klass;
         this.inclass=Class;
     }
     introduces(chooseLeader){
         return `${this.introduce()} I am a Student. ${chooseLeader}`;
     }
}
class  Classs {
 constructor(number){
     this.number=number;
     this.teachers=[];
 }
    assignLeader(student11){
        if(student11.id==="0000"){
            return `I am Leader of Class ${student11.klass}.`;
        }else{
            return `I am at Class ${student11.klass}.`;
        }
    }
    appendMember(student11){
          student11.klass=this.number;
          student11.inclass=Class;
        for(let teather of this.teathers){
            teather.classInform(student11.name,this.number,'join');
        }

    }

}
