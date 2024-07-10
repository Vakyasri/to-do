let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;


    let del = document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(del);
    inp.value="";
});


let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        console.log("button deleted");
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
 
//upto here we can only delete the available 2 lists but not the new created ones, the eventlistener won't work for newly added tasks
//to work for them also we use Event Delegation , it uses bubbling property
//whenever a new child element is created and event is added, it's event automatically triggered on its parent element

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){//event.target.nodename triggers that which has clicked
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});








