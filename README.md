# 📚 JavaScript Learning Modules — README

This repository contains a structured set of JavaScript learning modules covering fundamentals, DOM, forms, OOP, NPM, and testing.  

---

# 📘 Table of Contents

1. [A — Variable Scope](#a--variable-scope)  
2. [B — Type Casting](#b--type-casting)  
3. [C — Functions](#c--functions)  
4. [D — Control Flow](#d--control-flow)  
5. [E — Arrays & Loops](#e--arrays--loops)  
6. [F — Expressions, Operators & Strings](#f--expressions-operators--strings)  
7. [G — DOM & Forms](#g--dom--forms)  
8. [H — Web Storage](#h--web-storage)  
9. [I — Node Package Manager](#i--node-package-manager)  
10. [J — OOP JavaScript](#j--oop-javascript)  
11. [K — Unit Testing](#l--unit-testing)

---

# 🧩 Sections

## A — Variable Scope  
**Folder:** 
- `a_varscope`
- `a_varscope_answer`

### Objective  
This section provides a practical, hands-on demonstration and comparison of JavaScript Data Types (primitive vs. non-primitive) and Variable Scope (global, function, and block) as defined by the keywords `var`, `let`, and `const`.

### Learning Outcome  
Upon completing this exercise, you should be able to:

1. **Differentiate Data Types:** Identify and distinguish between JavaScript's Primitive Data Types (`number`, `string`, `boolean`, `null`, `undefined`) and Non-Primitive (Reference) Data Types (`Objects`, `Arrays`, and `Functions`).

2. **Understand Variable Immutability:** Explain why and how to use the const keyword to create variables that cannot be reassigned.

3. **Master Scoping Rules:** Clearly articulate the difference in scope between:

    * **`var`**: Which has global or function scope and allows re-declaration. 

    * **`let`**: Which has block scope ({...}) and prevents re-declaration in the same scope.

    * **`const`**: Which shares the same block scope as `let` but enforces a stronger restriction: **immutability** (its value cannot be changed)

4. **Avoid Common Errors:** Anticipate and prevent scope errors by correctly using `var`, `let` and `const` to manage the accessibility of variables (e.g., recognizing why a variable declared inside a function is not accessible globally).

---

## B — Type Casting  
**Folders:**  
- `b_typecasting`  
- `b_typecasting_answer`  
- `b1_simple_validation`
- `b1_simple_validation_answer`

### Objective  
This section demonstrates how JavaScript handles explicit Typecasting (converting values between Number, String, and Boolean types) and to illustrate how type-checking functions, like `isNaN()`, are used to implement basic form input validation.

### Learning Outcome 
Upon completing this tutorial, you should be able to:

1. **Perform Typecasting:** Understand and use the built-in global methods `Number()`, `String()`, and `Boolean()` to explicitly convert various data types (`strings`, `dates`, `numbers`) into a desired type.

2. **Note the outcomes of conversion:** Recognize that empty strings or strings containing only spaces convert to the number 0, while non-numeric strings result in NaN ("Not a Number").

3. **Apply Validation Logic:** Implement basic client-side form validation by:

    * **Preventing Default Behavior:** Using `event.preventDefault()` to stop a form submission before validation runs.

    * **Type Checking:** Using the `isNaN()` function to check if the user input is a number.

    * **Length Checking:** Using the `.length` property to ensure input meets specific requirements (e.g., a 7-digit number).

    * **Handle User Feedback:** Use `alert()` to provide immediate feedback to the user regarding valid or invalid input.

---

## C — Functions  
**Folders:**  
- `c_functions`  
- `c_functions_answer`

### Objective  
This section demonstrates the usage of JavaScript Functions, including **conventional** and **arrow** functions, with a focus on implementing Form Logic and Input Validation to build a user interface that handles data population and form validation.

### Learning Outcome
Upon completing this tutorial, you should be able to:

1. **Define and Use Functions:** Successfully implement both a conventional function (`ftnSalutation`) to return data (an array of salutations) and an arrow function (`ftnGreeting`) to process and return a value (a formatted greeting string).

2. **Apply Function Parameters:** Understand how to define and use parameters in the `ftnGreeting` function to accept input (salutation, user) and perform operations based on that input.

3. **Implement Input Validation:** Create a new function (`validateInputs`) that demonstrates:

4. **Default Parameter Values:** Assigning a default value (e.g., `name=""`) to a function argument.

5. **Conditional Logic:** Using if statements and boolean logic to check if required form fields (choice and name) are correctly filled.

6. **Boolean Return Values:** Returning true for valid input and false for invalid input, which is the **standard pattern for validation helper functions**.

6. **Integrate JS with HTML:** Understand the relationship between the JavaScript functions (in `script.js`) and the HTML form elements (in `index.html`), specifically by using the onclick attribute to call a function (`ftnProcessName()`) when the form button is clicked.

---