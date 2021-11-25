
function checkName() {
    var name = document.getElementById("FirstName").value;
    
   
    if (name.length <3 ) {
        
       
       alert("enter a valid name with at least 3 characters");
      
       
    }
   
}
function checkLastName() {
    var lastName = document.getElementById("LastName").value;
    
   
    if (lastName.length <4 ) {
        
       
       alert("enter a valid last name with at least 4 characters");
     
       
    }
    
}
function checkNumber() {
    var number = document.getElementById("contact").value;
    
   
    if (number.length <10) {
        
       
       alert("enter a valid number");
     
       
    }
    
}
