// All you would have to do is extends the Error class
class MyError extends Error{

}

throw new MyError("This is my custom error being thrown");