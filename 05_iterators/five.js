const coding = ["js","ruby","java","python","cpp"]

// some loops are directly added inside properties inside arrays 
// when we inspect coding array in developer console , in prototypes of array it will show that foreach is present 
// map is also a prototype of arrays 

coding.forEach(function(item){
// now foreach loop need callback function, so will give it this function, but according to syntax here, we will not give name 
// Since now function is running inside array, inside () it will bring value, you can any name , here its 'item'
   console.log(item);
})
// js
// ruby
// java
// python
// cpp


// We can Use Arrow functions also 