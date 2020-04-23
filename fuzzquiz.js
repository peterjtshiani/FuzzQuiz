//  check your speaker output  Loop over integers to from 1 to 100
// If integer is dividable by 3 print Fizz
// If integer is dividable by 5 print Buzz
// If integer is dividable by 3 and 5 print FizzBuzz
// else just print the integer


for (var i=1; i < 100; i++){
   if ((i % 3 == 0) && (i % 5 == 0)) 
	{
		console.log("FizzBuzz");
	}
    else if (i % 3 == 0) 
	{
		console.log("Fizz");
	}
	
    if (i % 5 == 0) 
	{
		console.log("Buzz");
	}
    else 
	{
		console.log(i);
	}	
}

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// .
// .
// 14
// FizzBuzz