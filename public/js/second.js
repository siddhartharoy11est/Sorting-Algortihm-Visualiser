
var arr=[];   //The array that needs sorting
var butn =""; //Which button is pressed
//function to generate a new array
function ArrayRand(){
for(var i=0; i<100; i++)
{
    var num=Math.floor(Math.random() * 680)+5;
    arr.push(num);
    //console.log(document.getElementById(i).style.height);
  }
}

function getElem(inputArr){
  // console.log(inputArr);
  for(var i=0; i<inputArr.length; i++){
    document.getElementById(i).style.height=inputArr[i] + "px";
    // document.getElementById(i).style.background-color="red";
    document.getElementById(i).style.backgroundColor = "red";
  }
}
function getElemm(inputArr){
  // console.log(inputArr);
  for(var i=0; i<inputArr.length; i++){
    document.getElementById(i).style.height=inputArr[i] + "px";
    // document.getElementById(i).style.background-color="red";
    // document.getElementById(i).style.backgroundColor = "red";
  }
}
  ArrayRand();
  getElemm(arr);

  function printArray(inputArr) {
      console.log(inputArr);
  }

//Selection sort Algorithm
  function selectionSort(inputArr) {
    let n = inputArr.length;
    let animation=Array(n);

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        animation[i]=[].concat(inputArr);
        // for(let )
        // console.log("...");
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
         }
         // console.log(animation[i]);
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
        }
        // console.log(animation[i]);
        // setTimeout(function() {
        //your code to be executed after 1 second
        // getElem(inputArr);
      // }, 2000);
    }
  //   for(let i=0; i<animation.length; i++){
  //   console.log(animation[i]);
  // }
    return animation;
}
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
async function animate(animation) {
  // console.log(animation[0]);
  // setTimeout(function() {
    // console.log(animation[0]);
  for(var i=0; i<animation.length; i++){
    console.log(animation[i]);
    for(var j=0; j<animation[i].length; j++){
      // setTimeout(()=>{
      document.getElementById(j).style.height=animation[i][j]+"px";
      document.getElementById(i).style.backgroundColor = "red";
      await sleep(0.5);
    // }, 1000);
  }
}
// }, 1000);
}



function helper(){
  var animation=[];
  animation = selectionSort(arr);
  animate(animation);
}
// helper();
// getElem(arr);

//selectionSort(arr);
