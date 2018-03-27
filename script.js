window.onload = function(){
  setInterval(function(){
    document.body.style.background = "#"+(Math.random()*0xFFFFFF <<0).toString(16);
    // console.log(numbers)
    // document.getElementsByTagName("body").style.backgroundColor =  "numbers";
  },5000);


}




// function addTodo(){
//   var button = document.getElementById("button");
//   button.removeAttribute("data-toggle");
//   var text = document.createTextNode(item);
//   var newItem = document.createElement("li");
//   newItem.appendChild(text);
//   document.getElementById("todoList").appendChild(newItem);
// }
function todoList(){
  var item = document.getElementById('todoInput').value;
  var text = document.createTextNode(item);
  var newItem = document.createElement("li");
  newItem.appendChild(text);
  if(item === ''){
    alert('Please enter a todo');
  }else{
    document.getElementById('todoList').appendChild(newItem);

  }
  document.getElementById('todoInput').value = "";
};
