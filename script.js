const bars = document.getElementById('bars');
const create = document.getElementById('createArray');
const bubble = document.getElementById('bubble');
const selection = document.getElementById('selection');
const insertion = document.getElementById('insertion');
const quick = document.getElementById('quick');
const merge = document.getElementById('merge');

const msg = document.getElementById('msg');
const elements = document.getElementById('elements');
const time = document.getElementById('time');

msg.style.color = 'aliceblue';
msg.style.textAlign = 'center';

var arr ;
var delay ;
var sortedArr ;

function createArray(ele){
    arr = [];
    for (let i = 0; i < ele; i++) {
        arr.push(Math.floor(Math.random() * 101))
    }
}

create.addEventListener('click', () => {
    if(elements.value == ''){
        msg.textContent = 'No Input from user'
    }else{
        bars.innerHTML = "";
        msg.textContent = 'Loading...'
        delay = time.value ;
        
        createArray(elements.value);
    
        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                const div = document.createElement('div');
                bars.appendChild(div);       
                div.style.backgroundColor = 'yellow'
                div.style.height = `${arr[i]*5.2}px`;
                div.style.width = '6px';
                div.style.marginRight = '3px'   
                msg.textContent = ''   
            }
        }, 1000);
        
        bars.style.margin = 'auto'
        elements.value = '';
        time.value = '';
    }
   
})


// Bubble sort---->
bubble.addEventListener('click',()=>{
    msg.textContent = 'Loading...'
    bars.innerHTML = "";

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr)

    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            const div = document.createElement('div');
            bars.appendChild(div);
            div.style.backgroundColor = 'yellow'
            div.style.height = `${arr[i]*5.2}px`;
            div.style.width = '6px';
            div.style.marginRight = '3px'
        }  

        msg.textContent = 'Sorted by Bubble Sort'
        msg.style.color = 'aliceblue';
        msg.style.textAlign = 'center'
        bars.lastChild.style.backgroundColor = 'green'
    }, delay*1000);  
})


// Selection Sort---->
selection.addEventListener('click',()=>{
    bars.innerHTML = "";
    msg.textContent = 'Loading...'

    for(let i=0; i<arr.length; i++){

        let min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }

        if(min!=i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    console.log(arr)

    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            const div = document.createElement('div');
            bars.appendChild(div);
            div.style.backgroundColor = 'yellow'
            div.style.height = `${arr[i]*5.2}px`;
            div.style.width = '6px';
            div.style.marginRight = '3px'
        }  

        msg.textContent = 'Sorted by Selection Sort'
        msg.style.color = 'aliceblue';
        msg.style.textAlign = 'center'
        bars.lastChild.style.backgroundColor = 'green'
    }, delay*1000);  
})


// Insertion Sort---->
insertion.addEventListener('click',()=>{
    bars.innerHTML = "";
    msg.textContent = 'Loading...'

    for(let i=1; i<arr.length; i++){
        let current = arr[i];

        for(var j=i-1; j>=0 && arr[j]>current; j--){
            arr[j+1]=arr[j]
        }

        arr[j+1]=current;
    }
    console.log(arr)

    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            const div = document.createElement('div');
            bars.appendChild(div);
            div.style.backgroundColor = 'yellow'
            div.style.height = `${arr[i]*5.2}px`;
            div.style.width = '6px';
            div.style.marginRight = '3px'
        }  

        msg.textContent = 'Sorted by Insertion Sort'
        msg.style.color = 'aliceblue';
        msg.style.textAlign = 'center'
        bars.lastChild.style.backgroundColor = 'green'
    }, delay*1000);  
})


// Quick Sort---->
quick.addEventListener('click',()=>{

    bars.innerHTML = "";
    msg.textContent = 'Loading...'
    
    function swapArrayValues(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      
      function pivot(arr, start = 0, end = arr.length - 1) {      
        let pivot = arr[start]; //19
        let swapIdex = start; //0
        for (let i = start + 1; i < arr.length; i++) {
          if (pivot > arr[i]) {
            swapIdex++;
            swapArrayValues(arr, swapIdex, i);
          }
        }
        swapArrayValues(arr, start, swapIdex);
        return swapIdex;
      }

      function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
          // left part
          let pivotIndex = pivot(arr, left, right);
      
          quickSort(arr, left, pivotIndex - 1);
      
          //right part
          quickSort(arr, pivotIndex + 1, right);
        }
        return arr;
      }

      quickSort(arr);
     
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            const div = document.createElement('div');
            bars.appendChild(div);
            div.style.backgroundColor = 'yellow'
            div.style.height = `${arr[i]*5.2}px`;
            div.style.width = '6px';
            div.style.marginRight = '3px'
        }  

        msg.textContent = 'Sorted by Quick Sort'
        msg.style.color = 'aliceblue';
        msg.style.textAlign = 'center'
        bars.lastChild.style.backgroundColor = 'green'
    }, delay*1000);  
    console.log(arr)
})


// Merge Sort---->
merge.addEventListener('click',()=>{
    bars.innerHTML = "";
    msg.textContent = 'Loading...'

    function mergeSort(arr){
        if(arr.length < 2){
          return arr
        }
        const mid = Math.floor(arr.length/2);
        const leftArr = arr.slice(0,mid);
        const rightArr = arr.slice(mid);
        return merge(mergeSort(leftArr) , mergeSort(rightArr))
      }

    function merge(leftArr , rightArr){
        const tempArr = [];
        while(leftArr.length && rightArr.length){
           if(leftArr[0] <= rightArr[0]){
            tempArr.push(leftArr.shift())
           }else{
            tempArr.push(rightArr.shift())
           }
        }
        sortedArr = [...tempArr, ...leftArr, ...rightArr];
        return sortedArr;
      }    

      mergeSort(arr)
      console.log(sortedArr)

      setTimeout(() => {
        for (let i = 0; i < sortedArr.length; i++) {
            const div = document.createElement('div');
            bars.appendChild(div);
            div.style.backgroundColor = 'yellow'
            div.style.height = `${sortedArr[i]*5.2}px`;
            div.style.width = '6px';
            div.style.marginRight = '3px'
        }  

        msg.textContent = 'Sorted by Merge Sort'
        msg.style.color = 'aliceblue';
        msg.style.textAlign = 'center'
        bars.lastChild.style.backgroundColor = 'green'
    }, delay*1000);  
})