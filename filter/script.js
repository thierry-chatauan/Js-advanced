
function newStudent(name, age){
    return {name, age}
}

let students = [
    newStudent("thierry", 36),
    newStudent("fernanda", 33),
    newStudent("marcia", 29),
    newStudent("joao", 23)
]

// for (let student of students){
//     if (student.age < 30){
//         console.log(student.name)
//     }
// }

//Ex. 1
function less30(student){
    return student.age < 30;
}

function more30(student){
    return student.age > 30;
}

let youngStudents = students.filter(less30)
let oldStudents = students.filter(more30)

console.log(youngStudents)
console.log(oldStudents)



