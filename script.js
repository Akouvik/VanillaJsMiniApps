window.onload = function(){
  setInterval(function(){
    document.body.style.background = "#"+(Math.random()*0xFFFFFF <<0).toString(16);
    // console.log(numbers)
    // document.getElementsByTagName("body").style.backgroundColor =  "numbers";
  },5000);


}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
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
