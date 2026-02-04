
let str = "Quý, Nam, Lan, Hùng, Nam";

let students = str.split(", ");
console.log("Mảng students ban đầu:", students);


students.reverse();
console.log("Mảng students sau khi đảo ngược:", students);



if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}


let indexNam = students.indexOf("Nam");
console.log("Vị trí đầu tiên của Nam là:", indexNam);
