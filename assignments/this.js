/* The for principles of "this"; in your own words. explain the four principle for the "this" keyword below.
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

function shout(command) {
        console.log(this);
        console.log('-----Above is what "this" refers to in the Principle 1 example-----')
    return command;
  }

console.log(shout("Run!"));
console.log('-----Above is what I return from my example of Principle 1-----')

// Principle 2
// code example for Implicit Binding

const myDad = {
    greeting: "Hey there, son!",
    name: "Russel",
    hometown: "Pittsburgh",
    oldInjury: "broken ankle",
    dangerousHobby: "throw iceballs at cars",
    tellStory: function(friend) {
      console.log(`${this.greeting} How are ya? Did I tell you about when I was a little boy back in ${this.hometown} and I got a ${this.oldInjury}? One day my friend ${friend} was bored and said, "${this.name}, let's ${this.dangerousHobby}!" It did not end well.`);
      console.log('--Above is what I return from my example of Principle 2--')
      console.log(this);
      console.log('--Above is what "this" refers to in the Principle 2 example--')
    }
  };
  
  myDad.tellStory("Billiam");

// Principle 3
// code example for New Binding

function Dictator(leader) {
    this.identification = 'I am a really powerful and evil dictator and my name is ';
    this.leader = leader;
    this.speak = function() {
      console.log(this.identification + this.leader);
      console.log(this);
    };
  }
  
  const stalin = new Dictator('Stalin');
  const polpot = new Dictator('Pol Pot');
  
  polpot.speak();
  stalin.speak();

  console.log('-----Above, you can see I have invoked the speak method twice, so you see the results of what it returns both times. You can also what "this" refers to. This is all for the Principle 3 example-----')

// Principle 4

// Whenever JavaScript’s call or apply method is used, this is explicitly defined.
// Taking the above object oriented approach we can discover that we can override what the CordialPerson constructor objects get set to. By calling them explicitly with a new context using .call and .apply

polpot.speak.apply(stalin);
stalin.speak.call(polpot); 

console.log('-----Above, you can see I have invoked the speak method twice with new arguments, so you see the results of what it returns both times. You can also what "this" refers to, which is different from in Principle 3 example. This is all for the Principle 4 example-----')

// code example for Explicit Binding