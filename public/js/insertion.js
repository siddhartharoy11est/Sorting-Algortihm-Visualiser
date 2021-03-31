let ins=[];
let incr=0;
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 0; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {

                inputArr[j+1] = inputArr[j];
                j--;
                ins.push([i, j+1, inputArr[i], inputArr[j+1]]);
            }
            inputArr[j+1] = current;
            // ins[incr]=[].concat(inputArr);
            // incr++;
        }
    return inputArr;
}
function insert(){
insertionSort(arr);
// animate(ins);
quickanimate(ins);
// return;
}
