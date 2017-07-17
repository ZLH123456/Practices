'use strict';
describe('step-by-step',()=>{
  it('test1',()=>{
    let result=new Person("Tom",21).introduce();
    let expectString='My name is Tom. I am 21 years old.';
    expect(expectString).toEqual(result);
  })
    it('extendsPerson',()=>{
        let result=new Students("Tom",21,2).introduces();
        let expectString='My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(expectString).toEqual(result);
    })
    it('test4',()=>{
        let result=new workers("Tom",21).introduces();
        let expectString='My name is Tom. I am 21 years old. I am a Worker. I have a job.';
        expect(expectString).toEqual(result);
    })
    it('test5',()=>{
        let result=new Teacher("Tom",21,2).introduces();
        let expectString='My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        expect(expectString).toEqual(result);
    })
    it('test6',()=>{
        let result=new Teacher("Tom",21).introduces();
        let expectString='My name is Tom. I am 21 years old. I am a Teacher. I teach no Class.';
        expect(expectString).toEqual(result);
    })
    it('test7',()=>{
      let a=new Class(2);
        let result=new Student("Tom",21,a.number).introduces();
        let expectString='My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(expectString).toEqual(result);
    })
    it('test8',()=>{
        let a=new Class(2);
        let student =new Student("Jerry",16,a.number);
        let teacher=new Teachers("Tom",21,a.number);
        let result2=teacher.introduces();
        let result1=teacher.introducewith(student);
        let expectString='My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        let expectString1='My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.';
        expect(expectString).toEqual(result2);
        expect(expectString1).toEqual(result1);
    })
    it('test8.1',()=>{
        let a=new Class(2);
        let student =new Student("Jerry",16,a);
        let teacher=new Teachers("Tom",21,3);
        let result2=teacher.introduces();
        let result1=teacher.introducewith(student);
        let expectString='My name is Tom. I am 21 years old. I am a Teacher. I teach Class 3.';
        let expectString1='My name is Tom. I am 21 years old. I am a Teacher. I dont teach Jerry.';
        expect(expectString).toEqual(result2);
        expect(expectString1).toEqual(result1);
    })
    it('test9',()=>{
      let a= new Classs (2);
      let student11=new student1("0001","Tom",16,a);
      let chooseLeader=a.assignLeader(student11);
      let result=student11.introduces(chooseLeader);
        let expectString='My name is Tom. I am 16 years old. I am a Student. I am at Class 2.';
      expect(expectString).toEqual(result);
    })
    it('test10',()=>{
        let a= new Classs (2);
        let student11=new student1("0000","Tom",16,a.number);
        let chooseLeader1=a.appendMember(student11);
        let chooseLeader=a.assignLeader(student11);
        let result=student11.introduces(chooseLeader);
        let expectString='My name is Tom. I am 16 years old. I am a Student. I am Leader of Class 2.';
        expect(expectString).toEqual(result);
    })
})