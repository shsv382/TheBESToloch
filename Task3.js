// классическая сортировка слиянием
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

// служебный метод - слияние отсортированных массивов
function merge(left, right) {
    let output = [];
    let [i, j] = [0, 0];
    while (!(i >= left.length && j >= right.length)) {
        if (j >= right.length || left[i] <= right[j]) {
            output.push(left[i]);
            i++;
        } else if (i >= left.length || left[i] > right[j]) {
            output.push(right[j])
            j++
        }
    }
    return output;
}

// удаление дубликатов и перемещение их в конец
function mergeSortWithDuplicates(array) {
    array = mergeSort(array);
    let duplicates = [];
    
    // не стал заморачиваться с циклом for
    array.forEach((item, i, arr) => { 
        (arr[i] === arr[i+1]) && duplicates.push(arr[i])
    })

    // а здесь - с созданием пустого массива и его заполнением
    return Array.from(new Set(array)).concat(duplicates);

    // В целом последняя функция добавляет 2 прохода
    // то есть O(2n) => O(n)
    // При том что сортировка имеет сложность O(n log n),
    // считаю это некритичным дополнением
}

console.log(mergeSortWithDuplicates([3,6,1,2,5,2,9,3,2]))