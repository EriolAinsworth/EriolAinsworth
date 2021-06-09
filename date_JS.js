//date to string
function myFunction() {
		  var d = new Date();
		  var n = d.toString();
		  document.getElementById("demo").innerHTML = n;
			}
//simple alert messagen when a user send message
function alertMessage() {
				alert("Your Message Has been Sent !");
			}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

//open modal
btns.onclick = function() {
  modal.style.display = "block";
}

//(x) close  modal
span.onclick = function() {
  modal.style.display = "none";
}

// clicks anywhere outsidemodal, it close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}