//----------------------------------------------------------PROMISES----------------------------------------------------------------
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise means that the task given by developer will not be completed instantly . Some task or operations can be done laterdepending on the usecase 
//Ex. File Access from systems(Kernel read the file and then control goes back to program)
//Ex. Request From DATABASE
//Ex. CryptoGraphy ,like password encryption
// In all such examples we will use asynchronous programming 
// async , await can be used or promises(mostly used in modern programming )
// In short , promises complete in future


/*A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

// Noticebly, mostly you will consume the promise and you wil less create a promise 

// Firstly , we will create promise to get good understanding of promises
// Promise is Object
const promiseOne = new Promise() // we are creating a instance of object (similar to we create a instance of class)
