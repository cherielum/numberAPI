let fact = document.querySelector('#fact'); 
let factText = document.querySelector('#factText'); 

//Create an Event Listener for Number Inputted 
let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);



// //fetch with XHR
function getFactAjax() {
	let number = numberInput.value; //.value pulls from what was typed in!
	console.log(number); //now if you put in a number, it'll show up in the console!
	
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://numbersapi.com/'+number); //we can concatenate the number variable

		xhr.onload = function(){
			if(this.status == 200 && number != '') { // by typing number !='' it means if we put nothing there won't be an error in console.log
				console.log(this.responseText); //responseText is what you can grab info as for xhr
				fact.style.display = 'block';
				factText.innerHTML = this.responseText; 
			}

		}
		xhr.send(); //which is http://numbersapi.com
}

//fetch with fetch API!
 function getFactFetch(){
      let number = numberInput.value;
      
      if(number != ''){
        fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
          fact.style.display = 'block';
          factText.innerText = data;
        })
        .catch(err => console.log(err)); 
      }
    }