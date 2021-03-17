
var arr=[];   //The array that needs sorting
var butn =""; //Which button is pressed

for(var i=0; i<100; i++)
{
    var num=Math.floor(Math.random() * 680)+5;
    arr.push(num);
    //console.log(document.getElementById(i).style.height);
    document.getElementById(i).style.height=num + "px";

  }


//function for printing an array
  function printArray(inputArr) {
    //for(var i=0; i<inputArr.length; i++){
      console.log(inputArr);
    //}
  }

//Selection sort Algorithm
  function selectionSort(inputArr) {
    let n = inputArr.length;

    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
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
printArray(inputArr);
    }
    return inputArr;
}


selectionSort(arr);
