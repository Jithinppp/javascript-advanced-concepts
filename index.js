//functions are first class citizens in  JS
//that  means functions
//1-functions can be assigned to variables

var AnyFunction1 = function () {}; //example

//2-the functions arguments
//Function arguments can be normabl args like vars,const, but we can also give function as argument

function AnyFunction2(ar1, arg2) {
  //this functions witth normal two arguments
  console.log(arg1, arg2);
}

function AnyFunction3(FunctionAsArgument) {
  //this argument is a function
  FunctionAsArgument();
}

AnyFunction3(function () {
  console.log("function inside a function");
  //calling the  AnyFunction3 with argument as this function that console logs
});

//3-Function can return another function
function AnyFunction4() {
  return function FunctionReturnsAfunction() {
    console.log("function returns another  function");
    //this is second funtion that  returns another function
  };
}

AnyFunction4();
