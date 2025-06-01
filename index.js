


// cannot be a reserved keyword like let or if
// meanininful - variable names like a, b, c 
// cannot start with a number !!
// cannot contain a space of hyphen 
// use commas to put them in the same sentence or put it in two diff
// let firstName - second word capital letter
// typeof is another reserved keyword

// let allows change but const does not - error in the code below but not the one below that
// const interestRate = 0.3; interestRate= 1; console.log(interestRate);
// const interestRate = 0.3; interestRate= 1; console.log(interestRate);


// primitive (value) types - strings, boolean, undefined, null 

// let name = 'mosh'; // string literal
// let age = 30; // number Literal
// let isApproved = true; // Boolean literal true/false
// let firstName = undefined;
// let lastName = null; // use null to explicitly clear the value of the variable, selections

// reference types - object, array function
// dot notation - more consize 
// bracket notation - allows dynamic 
// let person = { name: 'Indu', age: 20 }; console.log(person);
// index determines possistion on array // let = selectedColors = ['red', 'blue'] selectedColors[2] = ['1']; console.log(selectedColors.length);

// function sets up a task
// 'Indu' is an argument and 'name' is a parameter of the function
// function greet(name, lastName) {console.log('Hello ' + name + ' ' + lastName);} greet('Indu', 'Ram');
//calculating a value

//function square(number) { return number * number;} console.log(square(2));

//function call - square(2) and console log - call to another function

// object oriented programming in JS
//combine a group of related functions into a bracket 

 // Function to make an element draggable
 function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
//starts as false not dragging, if it is true it drags (isDragging is a simple tool to tell the program if the element is being dragged rn)
// side note: if i delete isDragging = false then the squares dont sit in one posistion but overlap the second i click on another square.
// offset x and offset y: how far the mouse is from the top left corner of the element so that it doesnt jump to the cursor but moves smoothly
    element.addEventListener('mousedown', (e) => {
      isDragging = true;
// addeventlistens - this part 'listens' for when u click on the element - mousdown event
// once u click it the dragging is true. also element.method means the element  works through the method for the external action
      offsetX = e.clientX - element.offsetLeft;
      offsetY = e.clientY - element.offsetTop;
// Calculate the offset of the cursor from the top-left corner of the element
// e = event, when an event occurs (eg mouse was clicked or keyboard key was pressed)
//client because values give the posistion of the mouse relative to the 'client' area of browser - area inside the browser window        
//look at it like math
      // Change cursor to 'grabbing' while dragging - fist closes - style - element there because it is the square thats being dragged
      element.style.cursor = 'grabbing';
    }); 
 // basically the element will listen to mousedow (clicked) and do the following  
 // - it will drag
 // - it will follow the mouse around by calculating the offset difference
 // - it will change the cursor style to grabbing (or first closed)

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
// document - so that the mouse can follow the square quickly  
// mousemove - dragging
// const - 

        // Update the position of the element
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        // same writing as element.style.left = x + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.cursor = 'grab'; // Change cursor back
    });
  }

  // Apply draggable functionality to all elements with the 'draggable' class
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(makeDraggable);
