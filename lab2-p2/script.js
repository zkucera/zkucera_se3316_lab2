
function loadfruit() {
var fruit = ["Apple" ,"Banana",'Peach'];
  
    
for(var i=0;i<fruit.length;i++){
    
    var toadd = $('<li></li>');
    toadd.text(fruit[i]);
    toadd.attr("id",fruit[i])
    toadd.appendTo('#fruits');
    
   }

} 

function switchfruit(){
var x = $('#newfruit').val();

$("#" + x).remove();
  
    var toadd = $('<li></li>');
    toadd.text(x);
    
    toadd.appendTo('#basket');
    
    
}
