//Selection sort Algorithm that returns a 2D array animation where every array is the inputArr after every step
    let animation=[];
  function selectionSort(inputArr) {
    let n = inputArr.length;


    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        // animation[i]=[].concat(inputArr);
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
            animation.push([i,min,inputArr[min],inputArr[i]]);
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;


        }
    }
    return animation;
}
async function selectionanimate (ani){
  for(let i=0; i<ani.length; i++){
  // const [barOneIdx,barTwoIdx, newHeight1, newHeight2] = ani[i];
  console.log(ani[i]);
  const barOneIdx = ani[i][0];
  const barTwoIdx = ani[i][1];
  const newHeight1 = ani[i][2];
  const newHeight2 = ani[i][3];
  document.getElementById(barOneIdx).style.height= newHeight1 + 'px';
  document.getElementById(barTwoIdx).style.height= newHeight2 + 'px';
  document.getElementById(barOneIdx).style.backgroundColor = "blue";
  // document.getElementById(barTwoIdx).style.backgroundColor = "blue";
  await sleep(0.005);
  }
}
function helper(){
  console.log("In selection fn");
  var animation=[];
  animation = selectionSort(arr);
  // animate(animation);
  selectionanimate(animation);
// if(isSorted(arr)===true)
// {  for(let i=0; i<100; i++){
//     document.getElementById(i).style.backgroundColor = "red";
//   }
// }
}
