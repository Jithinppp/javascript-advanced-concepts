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
    console.log("function returns another function");
    //this is second funtion that  returns another function
  };
}

// AnyFunction4();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//section 2
//higher order function is those functions which are takes function as argument or returns a function

//a function for user login ; to authenticate each user we have to copy auth function multiple times

//auth function fot first user
function FirstUserLogin() {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }

  console.log("access granted to first user");
}

//auth function fot second user
function SecondUserLogin() {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }

  console.log("access granted to second user");
}

// FirstUserLogin();
// SecondUserLogin();

//efficent code to any different user one function acepts multiple users
function UserLogin(username) {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }

  console.log("access granted to second user" + username);
}
// UserLogin("secondUser");

//more efficent code is to make the return outside this auth function

//function expression that returns access grant and another function for authenticate
const GrantAccess = (username) => "access granted to " + username;

//normal function that calls the grant function
function CommonLogin(user) {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }
  return GrantAccess(user);
}

CommonLogin("raju");

//this is also in efficent so to make more  efficent than this we use higher order functions

const Authenticate = (verifivation) => true;

function AllUserLogin(person, authFunction) {
  if (person.level === "admin") {
    //admin authenticate
    console.log("admin authenticate");
  } else if (person.level === "user") {
    //user authenticate
    console.log("user authenticate");
  }
}
AllUserLogin({ name: "adam", level: "user" }, Authenticate);

//another example multiplyby

function multipliedBy(val1) {
  console.log(val1);
  return function (val2) {
    console.log(val2);
    console.log(val1 * val2);
  };
}

const multi = multipliedBy(2);
multi(4);
