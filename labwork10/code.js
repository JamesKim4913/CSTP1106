say_hello = function() {
  alert("Hello World");
}

//x = 5;  // this is just a variable's declration and initiaton
//alert(x);  // this is how you would read a variable

// x = 10;  // this is an assignment statement
// x = x + 1; // here x should be 11
//alert(x);


////alert(y);

//alert(x + 1);  // this should display 12


add = function() {
  x = parseInt(jQuery('#op1').html());  // get
  y = parseInt(jQuery('#op2').html());
  // alert(x + y);
  z = x + y;  // processing
  jQuery('#result').html(z); // set
}


setup = function() {
  jQuery('#trigger_the_add').click(add);
}


jQuery(document).ready(setup);
