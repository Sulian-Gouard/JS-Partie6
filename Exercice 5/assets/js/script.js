let firstNumber = 2;
    let secondNumber = 3;
    idButton.onclick = functionClick;

    function functionClick() {

      while (firstNumber * secondNumber < 250) {
        let divId = document.createElement("div");
        divId.innerHTML = (firstNumber * secondNumber);
        idDiv.appendChild(divId);
        secondNumber = firstNumber * secondNumber;

      }
    }