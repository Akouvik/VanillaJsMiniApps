//change background color every 5seconds
window.onload = function(){
  setInterval(function(){
    document.body.style.background = "#"+(Math.random()*0xFFFFFF <<0).toString(16);
    // console.log(numbers)
    // document.getElementsByTagName("body").style.backgroundColor =  "numbers";
  },5000);
}

// add close buttons to the existing li items
var Nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < Nodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  Nodelist[i].appendChild(span);
}
// creat a new todo and clear the field afterwards
function todoList(){
  var item = document.getElementById('todoInput').value;
  var text = document.createTextNode(item);
  var li = document.createElement("li");
  li.appendChild(text);

  if(item === ''){
    alert('Please enter a todo');
  }else{
    document.getElementById('todoList').appendChild(li);
  }
  document.getElementById('todoInput').value = "";

    //add close buttons to new li items
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close'
    span.appendChild(txt);
    li.appendChild(span);

    for(var i=0;i<close.length;i++){
      close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
      }

    }
};
//add a checked marked when li is clicked
var list = document.getElementById("todoList");
list.addEventListener("click", function(e){
  if(e.target.nodeName === "LI"){
    e.srcElement.classList.toggle("checked");
  }
});

// delete items when the close button is clicked
var close = document.getElementsByClassName('close');
for(var i = 0;i<close.length;i++){
  close[i].onclick = function(){
    this.style.display = 'none';
  }
}
