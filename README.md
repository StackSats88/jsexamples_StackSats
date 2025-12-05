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
7. [G — Object-oriented Principles](#g--object-oriented-principles)
8. [H — Javascript Assessment](#h--javascript-assessment)
9. [I — DOM & Forms](#h--dom--forms)
10. [J — Web Storage](#i--web-storage)
11. [K — Node Package Manager](#j--node-package-manager)
12. [L — Unit Testing](#k--unit-testing)

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

   - **`var`**: Which has global or function scope and allows re-declaration.

   - **`let`**: Which has block scope ({...}) and prevents re-declaration in the same scope.

   - **`const`**: Which shares the same block scope as `let` but enforces a stronger restriction: **immutability** (its value cannot be changed)

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

   - **Preventing Default Behavior:** Using `event.preventDefault()` to stop a form submission before validation runs.

   - **Type Checking:** Using the `isNaN()` function to check if the user input is a number.

   - **Length Checking:** Using the `.length` property to ensure input meets specific requirements (e.g., a 7-digit number).

   - **Handle User Feedback:** Use `alert()` to provide immediate feedback to the user regarding valid or invalid input.

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

7. **Integrate Javascript with HTML:** Understand the relationship between the JavaScript functions (in `script.js`) and the HTML form elements (in `index.html`), specifically by using the onclick attribute to call a function (`ftnProcessName()`) when the form button is clicked.

---

## D — Control Flow

**Folders:**

- `d_controlflow`
- `d_controlflow_answer`

### Objective

The section demonstrates the practical use of **Control Flow** structures—specifically conditional logic (`if` statements) and the `switch` statement—integrated with DOM Manipulation and Event Handling to create robust, interactive client-side form logic.

### Learning Outcome

Upon completing this exerise, you should be able to:

1. **Implement Control Flow for Validation:** Apply conditional logic within the validateInputs and `ftnProcessName` functions to create a multi-layered validation gate, ensuring required fields and radio button selections are complete before proceeding.

2. **Master the `switch` Statement:** Effectively use the switch statement within the `ftnRadioMeal` function to handle multiple possible input choices (like meal preferences) and execute specific code blocks for each case, providing clear, real-time feedback.

3. **Integrate DOM and Event Handling:** Write JavaScript that listens for a user event (like the button onclick or a radio button being selected) and then manipulates the DOM (e.g., dynamically populating the `<select>` list and updating the` <p id="displayPreference">` element) based on the results of the control flow logic.

4. **Structure Application Logic:** Understand how to combine and call separate JavaScript functions—for data (`ftnSalutation`, `ftnGreeting`), validation (`validateInputs`), and conditional processing (`ftnRadioMeal`, `ftnProcessName`)—to build a cohesive application flow.

---

## E — Arrays & Loops

**Folders:**

- `e_arrays_and_loops`
- `e_arrays_and_loops_answer`

### Objective

The section demonstrates the declaration, properties, and most common array methods (`map`, `filter`, `sort`, `reduce`) alongside the fundamental looping structures (`for`, `forEach`, `do-while`, `while`) to effectively process and manage lists of data in JavaScript.

### Learning Outcome

Upon completing this exercies, you should be able to:

1. **Understand Array Structure:** Define and declare arrays, and retrieve their size using the .length property.

2. **Apply Iteration Methods (`map`, `filter`, `forEach`):**

   - Use `.map()` to transform every element in an array into a new array (e.g., multiplying all numbers by 10).

   - Use `.filter()` to create a new array containing only elements that meet a specific condition (e.g., finding specific vowels).

   - Use `.forEach()` to iterate over an array and execute a function for each element (e.g., printing out ticker symbols or object listings).

3. **Master Array Manipulation:** Utilize methods like `.sort()` for reordering elements (both ascending and descending), `.push()` for adding elements to the end, and the spread syntax (...) combined with `.splice()` for complex insertion.

4. **Implement Looping Structures:**

   - Use the for loop to execute code a specific number of times, demonstrating reverse counting and the use of the ternary operator for conditional output.

   - Differentiate between `while` loops (checks condition before execution) and `do-while` loops

---

## F — Expressions, Operators & Strings

**Folders:**

- `f_expressions_operators`
- `f_expressions_operators_answer`
- `f_operators_strings_new`
- `f_operators_strings_answer`

### Objective

The section demonstrates the use of JavaScript Expression Operators in conjunction with modern coding conventions (using `const` and `let`) and the `switch (true)` statement to build a robust, comprehensive, and clean-number guessing game that evaluates multiple, complex conditions concisely, handle user inputs to provide feedback dynamically.

### Learning Outcome

Upon completing this exercise, you should be able to:

1. **Differentiate Variable Declaration:** Use `const` for values that remain fixed (ans, feedback strings) and `let` for variables that change (`userInput`, `userFeedback`), following modern JavaScript best practices.

2. **Apply Expression Operators:** Correctly apply multiple expression operators in practical logic, including:

   - Comparison Operators (`==`, `>`, `<`) for value checking and providing hints.

   - Logical Operators (`!`) for checking "falsy" values (like empty input).

   - String Methods (`.toLowerCase()`, `.toUpperCase()`) to create case-insensitive comparison expressions.

3. **Master the switch (true) Structure:** Implement a `switch (true)` statement as a superior alternative to long `if/else if` chains.

4. **Develop Robust Input Logic:** Write code that accounts for diverse user input—the correct number, the correct answer as a string, incorrect numbers (too high/too low), and empty input—by crafting dedicated expressions for each scenario.

---

## G — Object-oriented Principles

**Folders:**

- `g_oop`
- `g_oop_answer`

### Objective

This section introduces and demonstrates the fundamental concepts of **Object-Oriented Programming (OOP)** in JavaScript as well as advanced concepts (e.g. Inheritance) using the modern Class Syntax (ES6+).

### Learning Outcome

Upon completion of this exercise, you should be able to:

1. Understand and utilize JavaScript **Classes** for **OOP**:

2. Define a class using the **`class`** keyword.

3. Implement a **`constructor()`** to initialize object properties.

4. Define and use instance **properties**, using the **`this`** keyword.

5. Define and call instance **methods**.

6. Create a new instance (object) of a class using the **`new`** keyword.

7. Understand and utilize **Constructor Functions** and **Prototypes**:

   - Define and use a traditional `constructor` function to create objects.

   - Create objects using the `constructor` function and the `new` keyword.

   - Understand the Prototype chain and how to add shared properties and methods to all instances of an object constructor.

8. Work with Object Literals and Arrays of Objects:

   - Create object literals (**key-value pairs**) to represent structured data.

   - Declare and initialize an array of objects (`new Array(...)` containing `{key: value, key: value}`).

   - Access properties of objects within an array using **bracket notation** (e.g., **`arrayName[0].name`**).

   - Dynamically modify the array by adding a new object element using the `push()` method.

9. Define and Utilize a **Base/Parent** Class:

   - Define a base class using the `class` keyword.

   - Implement a constructor to initialize instance properties.

   - Define and call instance method that belong to the `class prototype`.

10. Implement **Inheritance** using the `extends` keyword:

    - Create a **subclass** (child class) that inherits properties and methods from a **superclass** (parent class) using the `extends` keyword.

11. Utilize the **`super()`** keyword in Constructors:

    - Understand that a subclass constructor must call `super()` before using this to initialize the parent class's properties.

    - Use `super(parameter1, parameter2, paramter3)` to call the constructor of a parent class.

12. Utilize the `super.` keyword for **Method Overriding/Extension**:

    - Understand how to call a method from the parent class within the child class using super.methodName(...).

    - Extend the functionality of the parent's method or simply reuse the parent's implementation, demonstrating **Polymorphism**.

13. Add New Properties and Methods to specific to a Subclass:

    - Add properties specific to a child class.

    - Define methods that only exist in the child class.

---

## H — Javascript Assessment

**Folder:** `h-assessment-structure`

### Objective

This section's primary objective is to evaluate the candidate's proficiency in Object-Oriented Programming (OOP) principles in JavaScript, specifically using Classes, and their ability to apply fundamental programming concepts to create a complete, interactive, console-based game application.

### Learning Outcome

1. **OOP Mastery:** Demonstrate proficiency in JavaScript Classes, including defining constructors, public methods, and static methods.

2. **Data Structure Implementation:** Effectively use and manipulate a 2D array to represent the game map/field.

3. **Game Loop & Logic:** Implement a functional game loop to handle user input, update the game state, and manage win/lose/quit conditions based on boundary and element checks.

4. **Console Interaction:** Integrate and use a library (prompt-sync) to manage basic console I/O (Input/Output).

---

## I — DOM & Forms

**Folders:**

- `i_dom`
- `i_dom_answer`
- `i_form`
- `i_form_answer`

### Objective

This section provides comprehensive examples for interacting with the Document Object Model (DOM).

### Learning Outcome

1. Understand the core techniques for **reading, modifying, and creating HTML elements using JavaScript's Document Object Model (DOM)**, selecting elements by various criteria, changing their content and visual style, and dynamically alter the structure of a webpage. Upon completing this exercise, you should be able to:

   1. **Select Elements:** Confidently use the fundamental DOM selection methods to target elements for manipulation:

      - `document.getElementById()` - for unique elements.

      - `document.getElementsByTagName()` - for collections of elements by tag name.

      - `document.querySelector()` - for selecting the first matching element using CSS selector syntax.

   2. **Modify Element Properties:** Understand and apply methods to change an element's appearance and content:

      - Use `.innerHTML` to insert or replace content, including raw HTML markup while acknowledging **the XSS security concern**.

      - Use `.innerText` to safely insert or replace an element's text content.

      - Use the `.style` property to directly apply CSS rules to an element (e.g., changing color or height).

   3. **Create and Insert New Elements:** Dynamically build and modify the page structure:

      - Use `document.createElement()` to generate new HTML nodes.

      - Use `.append()` and `.appendChild()` to successfully attach newly-created nodes to the existing DOM tree.

      - Use `setAttribute()` (in the context of `appendChild`) to define properties like id on a dynamically created element.

2. Understand dynamic **integration of JavaScript data structures** (Arrays) with HTML Form Elements using **DOM manipulation methods**. This demonstrates how to dynamically populate a multi-select dropdown menu, respond to user selections via Event Listeners, and synchronize the user's choices between the visual form and the underlying JavaScript data structure. Upon completing this exercise, you should be able to:

   1. **Dynamic Form Population:** Use an array of data (`arrTopics`) to iterate and programmatically create `<option>` elements, adding them to an HTML `<select>` element using methods like new `Option()` and `selectDom.options.add()`.

   2. **Attribute Management:** Apply `setAttribute()` to modify element properties in real-time (e.g., setting the multiple attribute on the `<select>` tag) and use `getAttribute()` to reliably retrieve the values of user selections.

   3. **Event Handling:** Implement and differentiate between two key event listeners:

      - `change` event on the `<select>` element to capture and process user selections immediately.

      - `click` event on a dedicated button to trigger a specific action.

   4. **Data-View Synchronization:** Write the necessary logic to perform the following two-way data synchronization:

      - **View to Data:** On a selection change, read the selected item values and push them into a JavaScript data array (`arrSelected`) while simultaneously preventing duplicates.

      - **Data to View:** Clear the selections both visually (by resetting the `<ul>` element's innerHTML) and logically (by using the `splice()` method to empty the `arrSelected` array).

---

## J — Web Storage

**Folders:**

- `j_web_storage`
- `j_web_storage_answer`

### Objective

This section demonstrates the complete workflow of a modern web application: fetching data asynchronously from a public API, dynamically rendering that data onto the webpage using DOM manipulation, and persisting the fetched data locally in the user's browser using the **Web Storage API (Local Storage)** to improve performance and user experience.

### Learning Outcome

Upon completing this exercise, you should be able to:

1. **Apply Asynchronous Programming (Fetch API):**

   - **Implement an asynchronous function `(async/await)`** to correctly use the `Fetch` API for retrieving external JSON data from an endpoint.

   - **Implement Exception Handling**: Use a **`try...catch`** block to handle potential network errors gracefully.

2. **Utilize Web Storage (Local Storage):**

   - Store fetched JSON data in the browser's localStorage using `JSON.stringify()` for persistence.

   - Retrieve stored data from localStorage using `JSON.parse()` and display it on the page, demonstrating how to load data without re-fetching from the server.

   - Clear data from the view and permanently remove it from localStorage using `localStorage.removeItem()`.

3. **Perform Dynamic DOM Manipulation:**

   - Write a dedicated function (`addItem`) that uses document.`createElement()` and related methods (`.append()`, `.className`, `.style`) to dynamically construct complex HTML elements (like `color cards`) for each item in the data set.

4. **Handle Interactive Events:**

   - Attach event listeners (e.g., `click`) to buttons to trigger the corresponding functions for fetching data, clearing the display, and clearing local storage.

---

## K — Node Package Manager

**Folder:** `k_node_package_manager`

### Objective

This section demonstrates the fundamental role of the **Node Package Manager (NPM)** and confidently apply its essential commands to initialize, configure, and manage dependencies for a **Node.js** project.

### Learning Outcome

Upon completion of this exercise, learners will be able to:

1. **Define NPM:** Articulate the purpose of **NPM** as the primary package manager for the Node.js ecosystem.

2. **Initialize a Project:** Utilize the `npm init` command to create a `package.json` file, which is essential for defining and tracking a project's metadata and dependencies.

3. **Manage Dependencies:** Use the `npm install` command to download and integrate external packages, specifically demonstrating the installation of a common package like **Express.js**.

4. **Run a Script:** Execute a Node.js application using standard methods like node <filename> or a script defined in package.json using `npm start`.

---

## L — Unit Testing

**Folders:**

- `l_unit_test`
- `l_unit_test_answer`

### Objective

This section primarily focuses on the use of the Jest framework to write unit tests for critical utility functions to ensure their reliability and correctness, thereby confirming that the form validation logic works as expected before deployment.

### Learning Outcome

Upon completion of this exercise, you should be able to:

1. **Setup a Unit Testing Environment:**

   - Configure a JavaScript project for testing by defining a `package.json` file using `npm init`.

   - Install a Jest testing framework as a development dependency using `npm install --save-dev jest`.

   - Define a test script ("test": "jest") to easily run all unit tests from the command line using `npm run test`.

2. **Structure and Write Unit Tests:**

   - Create a dedicated test file (e.g., `filename.test.js`) to test a specific module (e.g., `filename.js`).

   - Define **test cases** using the `test()` function to check specific scenarios.

3. **Apply Jest Matchers (Assertions):**

   - Use the `expect()` function combined with matchers to assert the results of a function call.

   - Utilize matchers such as `toBeTruthy()` and `toBeFalsy()` to check for boolean outcomes.

   - Use the `toBe()` matcher to assert equality against a specific value.

4. **Implement Data-Driven Testing:**

   - Employ the `test.each()` method to run the same test logic across multiple input/output scenarios with an array of test data, making tests more efficient and robust.

5. **Understand Function Isolation:**

   - Recognize the value of testing pure functions (isEmpty, isEmail) in isolation from the UI or external dependencies, ensuring the core logic is sound.

6. **Understand Test Suite:**

   - Understand the real-world application of tested functions within the client-side context, where the correctness of these functions are verified by a Test Suite, which is the entire collection of **Jest** unit tests (or test cases $\checkmark$ ) defined in a `filename.test.js`, ensuring the core software logic exhibits the specified validation behaviors.
