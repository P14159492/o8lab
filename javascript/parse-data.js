(function(){
  let demoData = document.getElementById("demo");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(jsonString);

  /*
    EXERCISE 01:
    Rewrite this to make it *loop* through all the lecturers' names. 
    (Note the ES6 'template literal' syntax):
  */
  
  let theData =  "";



  
  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.lecturers.length; i++) {
	theData += `<li>${obj.lecturers[i].firstName} ${obj.lecturers[i].lastName} ${obj.lecturers[i].roomNumber}</li>`;
	
  }
  

  demoData.innerHTML = theData; 
 
  
   /*
    EXERCISE 02:
    Once you have looped through all the data, present the 
    results on the page, styled with CSS.
  */
}());
