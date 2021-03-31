let itmd = [];
for (var i = 0; i < arr.length; i++) {
    itmd.push(0)
}
const pri=[];
function mergeArray(start, end) {
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end

    // Initial index of merged subarray
    let index = start

    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            itmd[index] = arr[start1]
            // pri.push([index, start1, arr[start1], arr[start2]])
            index = index + 1
            start1 = start1 + 1;
        }
        else if(arr[start1] > arr[start2]) {
            itmd[index] = arr[start2]
            // pri.push([index, start2, arr[start2], arr[start1]])
            index = index + 1
            start2 = start2 + 1;
        }
    }

    // Copy the remaining elements of
    // arr[], if there are any
    while (start1 <= end1) {
        itmd[index] = arr[start1]
        // pri.push([ start1, index, arr[start1], arr[start1]])
        index = index + 1
        start1 = start1 + 1;
    }

    while (start2 <= end2) {
        itmd[index] = arr[start2]
        // pri.push([start2, index, arr[start2], arr[start2]])
        index = index + 1
        start2 = start2 + 1;
    }

    index = start
    while (index <= end) {
        arr[index] = itmd[index];
        pri.push([index, index, arr[index], arr[index]])
        index++;
    }

}

const mergeSort = (start, end) => {
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
         mergeSort(start, mid)
         mergeSort(mid + 1, end)
         mergeArray(start, end)
         // drawBars(start, end)

        // Waiting time is 800ms
         // timeout(800)
    }
}

function merges(){
  console.log(arr);
  mergeSort( 0, arr.length-1);
  console.log(arr);
  quickanimate(pri);
}
