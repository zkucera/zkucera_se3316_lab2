
function loadfruit() {
var fruit = ["Apple" ,"Banana",'Peach'];
  
    
for(var i=0;i<fruit.length;i++){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(fruit[i]);
	node.appendChild(textnode);
	node.setAttribute("id", fruit[i])
    document.getElementById("fruits").appendChild(node);   
   }

} 

function switchfruit(){
var x = document.getElementById("newfruit").value;

var elem = document.getElementById(x);
elem.parentNode.removeChild(elem);
 var node = document.createElement("LI");
    var textnode = document.createTextNode(x);
	node.appendChild(textnode);
	node.setAttribute("id", x)
    document.getElementById("basket").appendChild(node); 
    
    
}
