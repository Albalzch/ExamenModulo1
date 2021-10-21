var button=document.getElementById("add");
var text=document.getElementById("text");
var tasks=document.getElementById("thetask");
function callApi(){
    
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        
        for(let i=0;i<data.data.length;i++){
            var task = document.createElement("div");
            var texto=document.createElement("h3");
            texto.innerHTML=data.data[i];
            task.appendChild(texto);
            task.classList.add("thetask");
            tasks.appendChild(task);
        }
    });
    
}
callApi();

function addtask(){
    var texto=text.value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem:texto
    },function(data){
        
        callApi();
    });
    text.value="";
}