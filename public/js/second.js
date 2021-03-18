
var arr=[];   //The array that needs sorting
var butn =""; //Which button is pressed
var animation=[];
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
  }
}
  ArrayRand();
  getElem(arr);

  function printArray(inputArr) {
      console.log(inputArr);
  }

//Selection sort Algorithm
  function selectionSort(inputArr) {
    let n = inputArr.length;

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        animation.push(inputArr);
        console.log(inputArr)
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
        }
        // setTimeout(function() {
        //your code to be executed after 1 second
        // getElem(inputArr);
      // }, 2000);
    }
    return inputArr;
}

function animate() {
  //console.log(animation[0]);
  setTimeout(function() {
  for(var i=0; i<animation.length; i++){
    // console.log(animation[i]);
      getElem(animation[i]);
  }
}, 1000);
}



function helper(){
  selectionSort(arr);
  animate(animation);
}
// helper();
// getElem(arr);

//selectionSort(arr);
