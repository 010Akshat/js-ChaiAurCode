# Project Related To Dom

## Project Link


# Solution code 1

```
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');
// now we get to know that we get NodeList So we can use NodeList
// Every action such as closing tab or moving cursor or clicking button is an event
buttons.forEach(function (button) {
  console.log(button); // HTML Span element and detail for each iteration
  // Now , here we will use event listenener
  button.addEventListener('click', function (e) {
    // e is event object, any name can be given
    console.log(e);   // when you click on color , PointerEvent comes           
    console.log(e.target); // when you click ,HTMLSpanElement comes , it will show event aa kaha se rah hai 
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor='grey';
        break;
      case 'white':
        body.style.backgroundColor='white';
      break;
      case 'blue':
          body.style.backgroundColor='blue';
      break;
      case 'yellow':
          body.style.backgroundColor='yellow';
      break;
      default:
        break;
 }
})
 
});


```

# Solution code 2

```
const form = document.querySelector('form')
// when form is submitted using get or post method , the data is sent in uRL , this action is by default of form so we need to stop that method 

form .addEventListener('submit',function(e){
  e.preventDefault() // to prevent default action i.e no submission
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  // we are taking height and width after clicking i.e happening of event that is why we are taking them inside actio listenener
  // , if we take them outside they will get empty value as soson as page is loaded
  if(height === '' || height<0 || isNaN(height))
  {
    results.innerText="Please Give a Valid Height"
  }else if(weight === '' || weight<0 || isNaN(weight))
  {
    results.innerText="Please Give a Valid weight"
  }else{
   // results.appendChild(document.createTextNode(`${(weight/(height*height*.01*.01)).toFixed(3)}`))
   // upper one giving correct answer , tried myself
   const bmi = (weight/(height*height*.01*.01)).toFixed(3);
   results.innerHTML=`<span>${bmi}</span>`;
   if(bmi<18.6){
    results.innerHTML=`<span>${bmi} Underweight</span>`;
   } else if(bmi<24.9){
    results.innerHTML=`<span>${bmi} NormalRange</span>`;
   } else{
    results.innerHTML=`<span>${bmi} Overweight</span>`;
   } 
  }


})

```  
# solution 3
```
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
// let date = new Date()
// const d=date.toLocaleTimeString();
// clock.innerHTML(d)

// in interview it is asked that to make run continously
// dont give fancy answer of server and ol for that we have setInterval
//set Interval Method
// In this , just give method and interval that after how much time that method should be repeated
setInterval(function(){
  let date = new Date()
  const d=date.toLocaleTimeString();
  clock.innerText = d;  // clock.innerHTML will also work
},1000)

```

# Solution 4
```

```
