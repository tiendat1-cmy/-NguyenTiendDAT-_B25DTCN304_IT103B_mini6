let Giatien = [100, 200, 300, 400];

for (let i of Giatien){
    console.log(`Gía trị trực tiếp của phần tử ${i}`);
}
for (let i in Giatien){
    console.log(`Vị trí index của từng phần tử ${i}`);
    
}
let sum = 0; 
for(let i = 0 ; i < Giatien.length ; i++){
    if(i % 2 == 0){
        sum+= Giatien[i];
        }
}
console.log(`Tổng giá trị của chẵn là ${sum}`);

