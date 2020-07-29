var button = document.getElementById("Enter");
var input = document.getElementById("userinput");
var ul =document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function createList(){
    var li =document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    input.value="";
}
function addListAfterClick(){
    if(inputLength()>0){
        createList();
    }
}
function addListAfterKeypress(event){
    
        if(inputLength()>0 && event.keyCode===13){
            createList();
        }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
