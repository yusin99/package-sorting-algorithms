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
    
  function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
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
  
    function insertionSort(arr, compare = defaultCompare) {
      const { length } = arr;
      let temp;
      for (let i = 1; i < length; i++) {
          let j = i;
          temp = arr[i];
          while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
              arr[j] = arr[j - 1];
              j--;
          }
          arr[j] = temp;
      }
      return arr;
  }
  
  module.exports = {bubbleSort,selectionSort,insertionSort};