//////////////////////////////////////////////quicksort begins//////////////////////////////////////////////////////////////////////

async function quickanimate (ani){
  for(let i=0; i<ani.length; i++){
  // const [barOneIdx,barTwoIdx, newHeight1, newHeight2] = ani[i];
  console.log(ani[i]);
  const barOneIdx = ani[i][0];
  const barTwoIdx = ani[i][1];
  const newHeight1 = ani[i][2];
  const newHeight2 = ani[i][3];
  document.getElementById(barOneIdx).style.height= newHeight1 + 'px';
  document.getElementById(barTwoIdx).style.height= newHeight2 + 'px';
  await sleep(0.005);
  }
}
let i1=0;
let ani = [];
 function quickSort(arr, start, end){
  if(start>=end){
    return;
  }

  let index =  partition(arr, start, end);
  // ani[i]=[].concat(arr);

  // console.log(ani[i1]);

   quickSort(arr, start, index-1);
   quickSort(arr, index, end);

}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
          ani.push([i,j,items[j],items[i]]);
          // i1++;
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

 function swap(items, leftIndex, rightIndex){
  // await sleep(10);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;

}

function quickkk(){
  console.log("In quick fn");
  // let ani = [];
  let start = 0;
  let end= arr.length-1;
  quickSort(arr,start, end);
    console.log(ani.length+"Height is this");
  quickanimate(ani);
}
