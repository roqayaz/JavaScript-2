
// Grab the element
const billAmount = document.getElementById('bill');
const people = document.getElementById('people');
const each = document.getElementById('each');
const tip = document.getElementById('tip');
const button = document.getElementById('button');
const service = document.getElementById('service');
const total = document.getElementById('total');

//The calculate function
const calculate = () => {

    //The alert box with the empty value
    if (billAmount.value === "" || service.value == 0 || people.value === "") {
        Swal.fire({
            icon: 'warning',
            text: 'You have to fill all the values!',
            iconColor: '#ff9900',
            confirmButtonText: "OK",
            confirmButtonColor: '#181818',

          })
        return;
      };
    // The alert box with the value under 1
      if (billAmount.value <= 0) {
        Swal.fire({
            icon: 'warning',
            text: 'You have to put the right value!',
            iconColor: '#ff9900',
            confirmButtonText: "OK",
            confirmButtonColor: '#181818',

          })
        return;   
      }
      
    //The each text appear when the number of people is more than 1
      if (people.value <= 1) {
        people.value = 1;
        each.style.display = "none";
      } else {
        each.style.display = "block";
      };

    // The calculate method 
   let cal = (billAmount.value * service.value) / people.value;

   cal = Math.round(cal * 100) / 100;
   cal = cal.toFixed(2);
   tip.innerText = cal;
   total.style.display = "block";
   
};

//Call the function 
button.addEventListener('click', calculate);
