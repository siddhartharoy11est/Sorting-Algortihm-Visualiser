let bubblearray=[];
function bubbleSort(inputArr) {
    let len = inputArr.length;

    for (let i = 0; i < len; i++) {
      // bubblearray[i]=[].concat(inputArr);
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
              bubblearray.push([j+1,j,inputArr[j], inputArr[j+1]]);
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;

            }
        }
    }
    return bubblearray;
};

function help(){
  console.log("In bubble fn");
  let bubblearray=[];
  bubblearray= bubbleSort(arr);
  bubbleanimate(bubblearray);
}
async function bubbleanimate (ani){
  for(let i=0; i<ani.length; i++){
  // const [barOneIdx,barTwoIdx, newHeight1, newHeight2] = ani[i];
  console.log(ani[i]);
  const barOneIdx = ani[i][0];
  const barTwoIdx = ani[i][1];
  const newHeight1 = ani[i][2];
  const newHeight2 = ani[i][3];
  document.getElementById(barOneIdx).style.height= newHeight1 + 'px';
  document.getElementById(barTwoIdx).style.height= newHeight2 + 'px';
  document.getElementById(barTwoIdx).style.backgroundColor = "blue";
  // document.getElementById(barTwoIdx).style.backgroundColor = "blue";
  await sleep(0.005);
  }
}
