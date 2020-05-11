    let firstNumber = 100;
    let secondNumber = 2;
    let idButton = document.getElementById("mybutton");

    idButton.onclick = function() {

        
            if (firstNumber < secondNumber) {
                alert("attention, entrez un first number superieur a second number")
            }
            
            let myP = document.createElement("p");
            myP.innerHTML = firstNumber;
            list.appendChild(myP);
            firstNumber = firstNumber / secondNumber;
        }
    