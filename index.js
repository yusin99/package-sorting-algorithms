function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) {
      return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Bubble sort Implementation using Javascript
  
  
function bubbleSort(arr, compare = defaultCompare) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) { // refer to note below
          if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
              swap(arr, j, j + 1);
          }
      }
  }
  console.log(arr);
}

function selectionSort(arr, compare = defaultCompare) {
    const { length } = arr;
    let minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i; j < length; j++) {
            if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    console.log(arr);
  }
  function quickSort(arr, compare = defaultCompare) {
    return quick(arr, 0, arr.length - 1, compare);
}

function quick(arr, left, right, compare) {
    let i;
    if (arr.length > 1) {
        i = partition(arr, left, right, compare);
        if (left < i - 1) {
            quick(arr, left, i - 1, compare);
        }
        if (i < right) {
            quick(arr, i, right, compare);
        }
    }
    return arr;
}

function partition(arr, left, right, compare) {
    const pivot = arr[Math.floor((right, left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compare(arr[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compare(arr[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}


module.exports = {bubbleSort,selectionSort,quickSort};