let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];


// myButton.addEventListener("click", function () {

//     languages.forEach(element => languages); {
//       let myP = document.createElement("p");
//       myP.innerText = languages;
//       myText.appendChild(myP);
//     }
  
//   })

  myButton.onclick = myFunction; 
  
  function myFunction() {

    languages.forEach(element =>  {
      let myDiv = document.createElement("div");
      myText.appendChild(myDiv);
      myDiv.innerText = element ;
    })
  }