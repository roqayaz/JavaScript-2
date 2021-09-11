const billAmount = document.getElementById('bill');
const people = document.getElementById('people');
const each = document.getElementById('each');
const tip = document.getElementById('tip');
const button = document.getElementById('button');
const service = document.getElementById('service');
const total = document.getElementById('total');


const calculate = () => {
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

      if (billAmount.value <= 0 || people.value <= 0) {
        Swal.fire({
            icon: 'warning',
            text: 'You have to put the right value!',
            iconColor: '#ff9900',
            confirmButtonText: "OK",
            confirmButtonColor: '#181818',

          })
        return;   
      }

      if (people.value = 1) {
        
        each.style.display = "none";
      } else {
        each.style.display = "block";
      };


   let cal = (billAmount.value * service.value) / people.value;

   cal = Math.round(cal * 100) / 100;
   cal = cal.toFixed(2);
   tip.innerText = cal;
   total.style.display = "block";
   
};
button.addEventListener('click', calculate);
