// !!! Ushbu imtihon masalalarini ishlashda HTMLga ulanib
// natija tekshirib ko'rilmasin. Shunchaki kodlarni o'zi yozilsin
// xolos.

// 1-task
// Promptdan gap qabul qilinsa, ushbu gapda
// necha marotaba a harfi ishtirok etganini aniqlang.
// Namuna:
// aHarfi("salom dunya") => 2;
// aHarfi("bugun dars qildim") => 1;

// function sanashA() {
//     let gap=prompt("gapni kiriting")
//     let aHarfiSanasi = 0;
//     for (let i = 0; i < gap.length; i++) {
//       if (gap[i].toLowerCase() == "a" || gap[i].toUpperCase == "a") {
//         aHarfiSanasi++;
//       }
//     }
//  console.log(aHarfiSanasi);
//   }
//   sanashA();

// 2-task
// Promptdan 5ga bo'linadigan son kiritilsa, ushbu sondan
// keyin keladigan 5ga bo'linadigan sonni chiqaring. Agar promptdan
// kiritilgan son beshga bo'linmasa, son 5ga bo'limaydi deng.
// Namuna:
// keyingiSon(20) => 25;
// keyingiSon(12) => "Son 5ga bo'linmaydi!";

// function keyingiSon(){
//     let son=+prompt("sonni kiriting")
//     if(son % 5 == 0){
//         console.log(son+5);
//     }
//     else{
//         console.log("bu son 5 ga bo'linmaydi");
//     }
// }
// keyingiSon();

// 3-task
// Arrayni ichidagi barcha sonlar bir xil sonlar
// ekanligini tekshiradigan funksiya yasang.
// Namuna:
// equal([1,1,1]) => true
// equal([1,2,1]) => false

// function tekshir(){
//     let arr1=+prompt("1-arrayni kiriting")
//     let arr2=+prompt("2-arrayni kiriting")
//     let arr3=+prompt("3-arrayni kiriting")
//     if(arr1 == arr2 == arr3){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// tekshir();

// 4-task
// Arrayni  ichida manfiy sonlar nechta ekanligini
// sanab beradigan funksiya yasang.
// Namuna:
// minuses([1,-2,-3,4]) => 2;
// minuses([5,0,2,1]) => 0;

// function sanashManfiy(){
//     let arr=[1,2,3,-2,9,-12,-1]
//     let arrayBoshi= 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < 0){
//             arrayBoshi++;
//         }
//     }
//     console.log(arrayBoshi);
// }
// sanashManfiy();

// 5-task
// Promptdan gap kiritilsa, har 3ta belgidan keyin
// ! belgisini qo'shing.
// Namuna:
// belgilar("salom dunyo") => "sal!om !dun!yo";
// belgilar("qish fasli kirib keldi.") => "qish! fa!sli! kir!ib !kel!di.!";

// function belgiQoyish() {
//     let gap=prompt("gapni kiriting")
//     let boshJoy = "";
//     for (let i = 0; i < gap.length; i++) {
//         boshJoy += gap[i];
//         if ((i + 1) % 3 === 0 && i !== gap.length - 1) {
//             boshJoy += "!";
//         }
//     }
//    console.log(boshJoy);
//   }
//   belgiQoyish();