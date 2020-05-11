let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];


myButton.addEventListener("click", function () {

  // days.forEach(day, index) =>
    days.forEach(element =>  {
      let myDiv = document.createElement("div");
      myDiv.innerText = element;
      myText.appendChild(myDiv);
      
        if (element == 'Samedi' || element == 'Dimanche') {
          myDiv.style.fontWeight = "bold";
            
        }
    })
  })


  