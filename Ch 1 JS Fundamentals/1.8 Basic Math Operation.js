// ===================== Basic Math Operators ================
// We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.
// In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.

// ===== Term: Binary Unary, Operand =====
// Before we move on, let’s grasp some common terminology.

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:


// ```` Unary Operator
// CODE: 
//         let x = -1;
//         alert(+x);
//```` Binary Operator
// CODE:
        // let x = 1 , y = 2;
        // alert(y - x);


// SOME other mathematical Operators
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **

// ******** Remainder *********
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b.

// For instance:

// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// ********** Exponentiation ************
// The exponentiation operator a ** b raises a to the power of b.
// In school maths, we write that as ab.

// For instance:

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16
// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// For example, a square root is an exponentiation by ½:

// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// ************** String Concatenation with Binary + *****************
// Let’s meet the features of JavaScript operators that are beyond school arithmetics.
// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges (concatenates) them:

// let s = "my" + "string";
// alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"
// See, it doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex example:

// alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers 

// ************* Numeric Conversions with Unary + ***************
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// For example:

// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0
// It actually does the same thing as Number(...), but is shorter.

// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

// The binary plus would add them as strings:

// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", the binary plus concatenates strings
// If we want to treat them as numbers, we need to convert and then sum them:

// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// // the longer variant
// // alert( Number(apples) + Number(oranges) ); // 5
// From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

// Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

// ======================= Operator Presedence ====================
// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

// Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

// There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

// Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):


// Precedence	Name	Sign
// …	…	…
// 14	unary plus	+
// 14	unary negation	-
// 13	exponentiation	**
// 12	multiplication	*
// 12	division	/
// 11	addition	+
// 11	subtraction	-
// …	…	…
// 2	assignment	=
// …	…	…


// ************** Assignment ****************

// Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

// That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

// let x = 2 * 2 + 1;

// alert( x ); // 5


// ************* Assignment Returns Value *************
// The fact of = being an operator, not a “magical” language construct has an interesting implication.

// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

// The call x = value writes the value into x and then returns it.

// Here’s a demo that uses an assignment as part of a more complex expression:

// let x = 1 , y = 2;
// let c = 3 - (a = x + y)

// alert(x + y);
// alert(c);

// In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

// Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

// Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.


// *************** Chaining Assignment ************
// Another interesting feature is the ability to chain assignments:

// let x , y, z;

// x = y = z = 4 + 4;
// alert(x)
// alert(y)
// alert(z)

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:

// c = 2 + 2;
// b = c;
// a = c;
// That’s easier to read, especially when eye-scanning the code fast.

// ************** Modify - In - Place **************

// We often need to apply an operator to a variable and store the new result in that same variable.

// For example:

// let n = 2;
// n = n + 5;
// n = n * 2;
// This notation can be shortened using the operators += and *=:

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14
// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:

// let n = 2;

// n *= 3 + 5; // right part evaluated first, same as n *= 8

// alert( n ); // 16

// ********************* Increment / Decrement **********************
// ncreasing or decreasing a number by one is among the most common numerical operations.

// So, there are special operators for it:

// Increment ++ increases a variable by 1:

// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3
// Decrement -- decreases a variable by 1:

// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1
// Important:
// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.
// Both of these statements do the same thing: increase counter by 1.

// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

// Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

// To see the difference, here’s an example:

// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2
// In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

// Now, let’s use the postfix form:

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1
// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

// To summarize:

// If the result of increment/decrement is not used, there is no difference in which form to use:

// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

// let counter = 0;
// alert( ++counter ); // 1
// If we’d like to increment a value but use its previous value, we need the postfix form:

// let counter = 0;
// alert( counter++ ); // 0
// Increment/decrement among other operators
// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

// For instance:

// let counter = 1;
// alert( 2 * ++counter ); // 4
// Compare with:

// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
// Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

// While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

// We advise a style of “one line – one action”:

// let counter = 1;
// alert( 2 * counter );
// counter++;


