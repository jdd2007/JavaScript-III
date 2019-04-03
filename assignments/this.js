/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: It might be ambiguous what the value of 'this' is in JS, but it is always contextual. The FIRST principle is that there is an object I think of as a background object, but known as the window or console object, and if you see 'this' in the global scope, 'this' is that window/console object.

* 2. Implicit Binding: A common way to call a function is with dot notation as in my example --- myObject.myFunction('an Argument') --- and in that example, any 'this' inside myFunction will be myObject. The reason is that in dot notation, 'this' is whatever is before the dot. We call this SECOND principle implicit binding. 

* 3. New Binding: The THIRD principle refers to the use of constructor functions. When we use them, 'this' is the object created and returned from the original constructor function. 

* 4. Explicit Binding: We can directly/explicitly set the context of 'this' in .call or .apply or .bind as the first parameter. You literally specify what 'this' is. 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding