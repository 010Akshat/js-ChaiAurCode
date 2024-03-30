// Immediately Invoked Function Expressions (IIFE)

/* 1.Here work is whenever you write a function you have to execute immediately.
For example, it can be  used in database connectivity , as youy open the app you directly want it to connect to database.
2. Sometimes when we write functions we dont want them to be polluted or effected by global scope variables */



// syntax for iife
(function chai(){
    // named iife
    console.log('DB connected')
})();


// it is similar to ()() where first parenthesis is function and second is function



//++++++++++++++++++Interview Question why iife-------------------------
// above two both are reasons , not only execute immediately . only this ans is wrong


 
// iife invoke immediately but it does not where to end itself, here we to use ; 
// so whenever you are asked to write two iife in a file remember to use semicolon



((name)=>{ // parameter
    // simple iife not simple iffe
   console.log(`DB connected two,${name}`)
})("aj") // arrow functi0n can also be called   // arguments 




