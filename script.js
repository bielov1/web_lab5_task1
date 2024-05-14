function insertionSort(arr) {    
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
      
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
      
        arr[j + 1] = key;
    }
    
    return arr;
}

function generateArr() {
    let arrLength = document.getElementById('arrLen').value;
    
    if (arrLength <= 0) {
        alert('WARNING: довжина масиву повина бути більше за 0');
        return;
    }

    let A = [];
    for (let i = 0; i < arrLength; i++) {
        A.push(Math.floor(Math.random() * 100));
    }

    document.getElementById('inputArray').textContent = A.join(', ');

    let max = Math.floor(Number.MIN_SAFE_INTEGER);
    let maxIndex = 0;
    for (let i = 0; i < A.length; i++) {
        if ((A[i] % 2 == 0) && (A[i] > max)) {
            max = A[i];
            maxIndex = i;
        }
    }

    document.getElementById('max').textContent = max;

    let min = Math.floor(Number.MAX_SAFE_INTEGER);
    let minIndex = 0;
    for (let i = 0; i < A.length; i++) {
        if ((i % 2 == 0) && (A[i] < min)) {
            min = A[i];
            minIndex = i;
        }
    }

    document.getElementById('min').textContent = min;

    document.getElementById('original').textContent = A.join(', ');

    temp = A[maxIndex];
    A[maxIndex] = A[minIndex];
    A[minIndex] = temp;

    document.getElementById('swap').textContent = A.join(', ');

    A = insertionSort(A);

    document.getElementById('sortedArr').textContent = A.join(', ');

}