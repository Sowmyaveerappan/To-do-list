
var inputBox = document.getElementById("inputBox")
var btn = document.getElementById("btn")
var container = document.getElementById("container")

btn.addEventListener("click",function(){
    var li = document.createElement("li")
    li.innerHTML = inputBox.value + '<button  onclick="deleteItem(event)">Delete</button>'
    container.append(li)
})
function deleteItem(event){
    event.target.parentElement.remove()
}

