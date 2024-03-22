const p1 = document.getElementById("p1");    
const p2 = document.getElementById("p2");

p1.addEventListener('click', updatenamep1); 

function updatenamep1(){
    let name; // store user input

    do {
        name= prompt ('Enter a number not equal to zero (0)');
    
        if (name == "" || name == 0) {
            alert('Warning! Invalid Input');
        }
        
    } while (name == "" || name == 0);

    p1.textContent = "PLAYER 1: " + name;
   
    }

p2.addEventListener('click', updatenamep2); 

function updatenamep2(){
    let name; // store user input

    do {
        name = prompt ('Enter a number not equal to zero (0)');
    
        if (name == "" || name == 0) {
            alert('Warning! Invalid Input');
        }
    } while (name == "" || name == 0);

    p2.textContent = "PLAYER 2: " + name;
   
    }

      // document.getElementById(id);
      // document.getElementsByClassName(id);


            