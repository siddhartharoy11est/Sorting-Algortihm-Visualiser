
var arr=[];   //The array that needs sorting
var butn =""; //Which button is pressed
//function to generate a new array
function ArrayRand(){
for(var i=0; i<100; i++)
{
    var num=Math.floor(Math.random() * 670)+5;
    arr.push(num);
  }
}
//A function that changes the height and the color
function getElem(inputArr){
  for(var i=0; i<inputArr.length; i++){
    document.getElementById(i).style.height=inputArr[i] + "px";
  }
}
  ArrayRand();
  getElem(arr);

  function printArray(inputArr) {
      console.log(inputArr);
  }


function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
   //A function that takes animation array and changes the height according to animation[i]
async function animate(animation) {
  for(var i=0; i<animation.length; i++){
    console.log(animation[i]);
    for(var j=0; j<animation[i].length; j++){
      document.getElementById(j).style.height=animation[i][j]+"px";
      document.getElementById(i).style.backgroundColor = "red";
      await sleep(0.0001); //Await only works in async functions
  }
}
}
// async function animatee(animation) {
//   for(var i=0; i<animation.length; i++){
//     console.log(animation[i]);
//     for(var j=animation[i].length-1; j>=0; j--){
//       document.getElementById(j).style.height=animation[i][j]+"px";
//       document.getElementById(i).style.backgroundColor = "red";
//       await sleep(0.001); //Await only works in async functions
//   }
// }
// }
const isSorted = arr => {
   const { length: l } = arr;
   if(l <= 1){
      return true;
   };
   for(let i = 1; i < l; i++){
      const con1 = arr[i] > 0 && arr[i-1] < 0;
      const con2 = arr[i] < 0 && arr[i-1] > 0;
      if(con1 || con2){
         return false;
      };
   };
   return true;
};
