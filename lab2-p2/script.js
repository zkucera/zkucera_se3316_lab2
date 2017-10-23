var fruit = ["Apple" ,"Banana",'Peach'];
function loadfruit() {

  
    
for(var i=0;i<fruit.length;i++){
    
    var toadd = $('<li></li>');
    toadd.text(fruit[i]);
    toadd.attr("id",fruit[i])
    toadd.appendTo('#fruits');
    
   }

} 

function switchfruit(){
var x = $('#newfruit').val();
var check = 0;
for(var j = 0; j < fruit.length;j++)
{
    if(x == fruit[j]) check = 1; 
}
$("#" + x).remove();
  
  if(check == 1){
    var toadd = $('<li></li>');
    toadd.text(x);
    
    toadd.appendTo('#basket');
  }   
    
}
