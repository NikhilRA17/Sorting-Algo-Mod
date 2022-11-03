const bars = document.getElementById('bars');
const create = document.getElementById('createArray');
const bubble = document.getElementById('bubble');
const selection = document.getElementById('selection');
const insertion = document.getElementById('insertion');
const msg = document.getElementById('msg');
const elements = document.getElementById('elements');
const time = document.getElementById('time');

msg.style.color = 'aliceblue';
msg.style.textAlign = 'center';

var arr ;
var delay ;

function createArray(ele){
    arr = [];
    for (let i = 0; i < ele; i++) {
        arr.push(Math.floor(Math.random() * 101))
    }
}

create.addEventListener('click', () => {
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


