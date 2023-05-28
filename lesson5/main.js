let names = ["n1","n2","n3"]

for (let i of names) {
    console.log(i)
}

let teacher = {
    teacherName: "Thắng",
    age: 25,
    place: "Sg",
    company: "MindX"

}

for (let i in teacher) {
    console.log(teacher[i]);
}