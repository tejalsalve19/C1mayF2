/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((stud)=>{
    if(stud.marks>50)
    {
      console.log(stud);  
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((stud)=>{
    if(stud.marks>50)
    {
      console.log(stud);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newStud={id: 4, name:"tejal", age:22, marks:90}
  arr.push(newStud);
  console.log(newStud)
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const failedStud=arr.filter((stud)=>{
    return stud.marks<50
  })
  console.log(failedStud)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 10, name: "jerry", age: "8", marks:40 },
  { id: 20, name: "tom", age: "12", marks:55 },
  { id: 30, name: "shinchan", age: "5", marks:49 },
  ];
  let answer=arr.concat(arr2);
  console.log(answer);
}
