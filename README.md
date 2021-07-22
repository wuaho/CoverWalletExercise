# CW Exercise for Excellence Fellowship Opportunity
[Application deployed to GitHub Pages](https://wuaho.github.io/CoverWalletExercise/)

# Below, the exercise:

The candidate will create a React.js app fulfilling the following criteria:
- The app will have a main component centered on the page both horizontal and vertical
- The component will display an input field, a button, and an empty div where we will display some information
- The input field should allow only numeric values
- When you click the button, the app should get the value from the input, send it to a function that will run some calculations, and then display the result inside the empty div
- The function will receive just one numeric parameter and will return back the value of the Fibonacci sequence for that position. We will assume the Fibonacci sequence starts with 1.
- Unit tests are optional
- CSS, design, and any other addition to the app are optional as well but feel free to add whatever you want here if you feel the need

# Solution-Approach

I started from the basic React project and continued modifying the files that were already contained in the folder:
- **App.js:** contains the main component and the code for the function that calculates the Fibonacci sequence for a given number. I decided to go with the iterative implementation of the Fibonacci sequence that has linear complexity O(n). Line 21 of the file was commented to make the writting of the tests an easier task.
- **App.css:** some css was attached to make the application look better.
- **App.test.js:** tests were also made to confirm that the application works the way it should. Four different cases were addressed:
	- The user enters a small natural number, Fibonacci(n=10) (the div is updated with the correct value).
	- The user enters a excessively large number, Fibonacci(n=1000000) (the div is updated with the value NaN).
	- The user enters an empty string (the div is updated with an empty string).
	- The user enters a negative number (the div is updated with an empty string).
	
	Code refactoring could be done to make the code in the tests look cleaner.
