// let n=10
// let i=11
// // while (i<=n){
// //     console.log(i);
// //     i++;
// // }

// do {//thực thi câu lệnh ít nhất 1 lần
//     console.log(i);
//     i++;

// }
// while (i<=n)
// console.log(innerWidth)
// const ul = document.getElementById("ul")
// for ( let i = 1; i <= 0; i++) {
//     let li = document.createElement("li")
//     li.innerHTML=i
//     ul.appendChild(li);

// }

// let studentListName = ["Thắng", "Trinh", "Uy", "Trà", "Nhật Anh"];

// console.log(studentListName)
// studentListName.push("Thành viên mới")
// console.log(studentListName)
// studentListName.splices(2, 1)
// console.log(studentListName)
// // for (let i=0; i<studentListName.length; i++){
// //     console.log(studentListName[i])

// // }



// for (let i = studentListName.length - 1; i >= 0; i--) {
//     if (studentListName[1]=="Trà"){
//         console.log("Trà ở vị trí thứ"+ i)
//     }
//     // console.log(studentListName[i]);
// }

// let teacher = {
//     teacherName: "Thắng",
//     place: "HCM",
//     country: "VN",
//     company: "MindX",
// }
// console.log(teacher)
// console.log(teacher.teacherName)
// teacher.place = "HN"
// console.log(teacher)
// teacher.salary = "100M"
// console.log(teacher)
// delete teacher.salary
// console.log(teacher)

let pet = {
    name: "bear",
    age: "two",
    color: "white"
}

console.log(pet)
console.log(pet.name)
pet.color= "black"
console.log(pet)
pet.hobby= "eat"
console.log(pet)
delete pet.hobby
console.log(pet)

let nnlt=["Java", "Python", "PHP"]
console.log(nnlt)
nnlt.push("C++")
console.log(nnlt)
for (let i=0; i<nnlt.length; i++){
    console.log(nnlt[i])
}