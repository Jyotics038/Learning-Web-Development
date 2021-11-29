let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Jyoti";

//userName=userInput//Error

function generateError(message: string, code: number) {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("An Error!!!!!", 500);
