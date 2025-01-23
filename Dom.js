//^ Document object model
//^dom is a web api used to manipulate the html content
//^dom is used to asserts, remove, update the content inside the html document

//& methods of dom:
//~ document.getElementById() 
//? target the html element based on id attribute value
//? with the id attribute you can select only one element
//~ document.getElementsByClassName()
//? class name can be used for multiple elements
//? with class attribute we can select multiple values with same class name
//~ document.getElementsByTagName()
//? used to target values with tag name
//? target element based on name attribute
//~ document.getElementsByName()
//? used to target values with name
//~ document.querySelector()
//? used to target values with css selector
//? this methods selects only one element
//~ document.querySelectorAll()
//? used to target values with css selector
//? this methods selects multiple elements



let element =document.getElementById("demo");
element.innerText = "DOM"; //^ used to manipulate the text (property)
console.log(element);

let div = document.getElementById("test");
div.innerHTML = "<h1>Header</h1>"
console.log(div);