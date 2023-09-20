'use strict';
const range = document.querySelector("input[type='range']");
const span = document.querySelector("#span");

document.getElementById("reset").addEventListener("click", reset);
function reset(){
  deleteChild();
  createNewArray();
}

 function swap(el1,el2)
{
  let temp = el1.style.height;
      el1.style.height = el2.style.height;
      el2.style.height = temp;

}

//function for bubble sort
 async function bubbleSort(arr)
{
  const ele = document.querySelectorAll(".bar");
var i, j;
const n=ele.length;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
      ele[j].style.background = 'red';
      ele[j+1].style.background = 'red';
      if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
              await delayTime(delay);
              swap(ele[j],ele[j+1]);
          }
          ele[j].style.background = '#AAC4FF';
          ele[j+1].style.background = '#AAC4FF';
    }
   ele[ele.length-1-i].style.background = 'whitesmoke';

}
 ele[0].style.background = 'whitesmoke';
}




document.getElementById("start").addEventListener('click',async function(){
  await bubbleSort();
});

//function for disabling a buttons



//function for mergeSort
async function merge(ele, low, mid, high){

    console.log('In merge()');
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);
    var time = 0;
    for(let i = 0; i < n1; i++){

        await delayTime(delay);
        time++;
        ele[low + i].style.background = '#C6E172';
        console.log(time);
        left[i] = ele[low + i].style.height;


    }
    for(let i = 0; i < n2; i++){

        await delayTime(delay);
        ele[mid + 1 + i].style.background = '#8D72E1';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await delayTime(delay);
    let i = 0, j = 0, k = low;

    while(i < n1 && j < n2){

        await delayTime(delay);

        if(parseInt(left[i]) <= parseInt(right[j])){

            if((n1 + n2) === ele.length){
                time++;
                ele[k].style.background = 'whitesmoke';
                console.log(time);
            }
            else{
                time++;
                ele[k].style.background = '#FFACC7';
                  console.log(time);
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === ele.length){
                time++;
                ele[k].style.background = 'whitesmoke';
                console.log(time);
            }
            else{
                time++;
                ele[k].style.background = '#FFACC7';
                console.log(time);
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){

        await delayTime(delay);
        if((n1 + n2) === ele.length){
            time++;
            ele[k].style.background = 'whitesmoke';
            console.log(time);
        }
        else{
            time++;
            ele[k].style.background = '#FFACC7';
            console.log(time);
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){

        await delayTime(delay);
        if((n1 + n2) === ele.length){
            time++;
            ele[k].style.background = 'whitesmoke';
            console.log(time);
        }
        else{
            time++;
            ele[k].style.background = '#FFACC7';
            console.log(time);
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    if(l >= r){
        //sorting complete
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}


document.getElementById("merge").addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;

    await mergeSort(ele, l, r);

});

// function for quick sorting

async function partitionLomuto(ele, l, r){
    let i = l - 1;
    ele[r].style.background = 'cyan'; //pivot
    for(let j = l; j <= r - 1; j++){

        ele[j].style.background = 'yellow'; //current element
        await delayTime(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color
            ele[i].style.background = 'orange';
          }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;

    await delayTime(delay);

    swap(ele[i], ele[r]);
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'whitesmoke';


    await delayTime(delay);


    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'whitesmoke')
            ele[k].style.background = '#e43f5a';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'whitesmoke';
            ele[l].style.background = 'whitesmoke';
        }
    }
}


const quickbtn = document.querySelector("#quick");
quickbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

    await quickSort(ele, l, r);


});

//function for selection sort

async function selectionSort()
{
  const ele = document.querySelectorAll(".bar");
  var i, j,min_idx;
  const n = ele.length;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
         min_idx = i;
          ele[min_idx].style.background='orange';
      //  for (j = i + 1; j < n; j++)
//{
        //ele[j].style.background='yellow';
        //delayTime(delay);
        //if (parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height))
        //  { min_idx = j;}
////}
   for(let j = i+1; j < ele.length; j++){

         // Change color of current bar
         ele[j].style.background = 'cyan';

         await delayTime(delay);

         if(parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height)){
             if(min_idx !== i){
                 // new min_index is found so change prev min_index color back to normal
                 ele[min_idx].style.background = 'pink';
             }
             min_idx = j;
         }
         else{
             // if the currnent comparision is more than min_index change is back to normal
             ele[j].style.background = 'pink';
         }
     }

        // Swap the found minimum element with the first element
        await delayTime(delay);
        swap(ele[min_idx], ele[i]);
        ele[min_idx].style.background = 'whitesmoke';
       // change the sorted elements color to green
       ele[i].style.background = 'whitesmoke';
    }
}

document.querySelector('#selection').addEventListener('click',async function(){
  await selectionSort();
});

//function for insertion sorte

async function insertionSort() {
  const ele = document.querySelectorAll('.bar');
  ele[0].style.background = 'pink';

   for(let i = 1; i<ele.length ; i++)
   {
     let j = i-1;
     let key = ele[i].style.height;
     ele[i].style.background = 'orange' ;

     await delayTime(delay);

     while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key))){

          ele[j].style.background = 'orange';
          ele[j+1].style.height = ele[j].style.height;
          j--;

          await delayTime(delay);

          for(let k = i; k >= 0; k--){
                ele[k].style.background = 'whitesmoke';
            }

     }
     ele[j + 1].style.height = key;
        ele[i].style.background = 'whitesmoke';
   }
}
document.querySelector('#insertion').addEventListener('click',async function(){
  await insertionSort();
});

createNewArray();
function createNewArray(noOfBars=range.value)
{
  deleteChild();

  let barArray=[];
  for(let i=0;i<noOfBars;i++)
  {
    let randomNum=Math.floor(Math.random()*251)
    console.log(randomNum)
    barArray.push(randomNum);
  }
  const bars=document.querySelector("#bars")
  for(let i=0;i<barArray.length;i++)
  {
    const bar=document.createElement('div')
    bar.style.height=`${barArray[i]*2}px`
    bar.classList.add('bar')
    bar.classList.add('flex-item')
    bar.classList.add('barNumber${i}')
    bars.appendChild(bar)
  }
span.textContent=range.value;
range.oninput = (()=>{
  span.textContent = range.value;

  createNewArray(range.value);
});
}

function delayTime(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed');

// Event listener to update delay time
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

function deleteChild(){
  const bar = document.querySelector("#bars");
  bar.innerHTML='';
}
