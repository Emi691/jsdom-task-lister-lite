document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(event){
    const input = document.querySelector("input#new-task-description").value
    const text = document.createTextNode(`${input}`)
    const element = document.createElement('li')
    element.appendChild(text)
    document.querySelector("div#list").appendChild(element)
    event.preventDefault();
  })
});
