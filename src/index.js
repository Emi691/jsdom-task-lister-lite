document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(event){
    const input = document.querySelector("input#new-task-description").value
    const text = document.createTextNode(`${input}`)
    const button = document.createElement("button")
    button.innerHTML = "x"
    const element = document.createElement('li')
    button.setAttribute('id', `${input}`)
    element.appendChild(text)
    element.appendChild(button)
    button.addEventListener("click", function(event){
      thisButton = event.target.id
      buttonClick(thisButton)
    })
    document.querySelector("div#list").appendChild(element)
    event.preventDefault();
  })

  function buttonClick(button){
    document.getElementById(button).parentElement.remove()
  }
});
