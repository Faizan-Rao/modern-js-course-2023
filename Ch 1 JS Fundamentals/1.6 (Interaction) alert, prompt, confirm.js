// =========== Interaction : alert , prompt and confirm ============
// As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.

// 1> alert
// This one we’ve seen already. It shows a message and waits for the user to press “OK”.

// For example:

// alert("Hello");
// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”. 

// 2> Prompt 
// The function prompt accepts two arguments:

// result = prompt(title, [default]);
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// title
// The text to show the visitor.
// default
// An optional second parameter, the initial value for the input field.

// The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

// The call to prompt returns the text from the input field or null if the input was canceled.

// For instance:

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!


// 3> confirm
// The syntax:

// result = confirm(question);
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

// For example:

// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed



// ================ Practice Task ===========


// let nameVar = prompt("Hellow  Whats your name");
// alert(`Hello ${nameVar}`);
// let isFine = confirm("How are You?")
// alert("Have a good day");