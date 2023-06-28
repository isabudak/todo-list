//Elementleri Seçme

const input=document.getElementById('inputt');
const ekle=document.getElementById('ekle');
const sil=document.getElementById('sil');
const liste=document.getElementById('liste');

ekle.addEventListener("click",function(){
    const li=document.createElement("li");
    li.classList.add('yeni');
    liste.appendChild(li);
    li.innerHTML=input.value;
    input.value="";

    if(li.innerHTML===""|| li.innerHTML===" "){
        alert("Girdiğiniz değer boş lütfen tekrar deneyiniz");
        liste.removeChild(li);
    }
    else{

        addStorage(li.innerHTML);

        liste.appendChild(li);
    }

    li.addEventListener("click",function(){
        li.style.textDecoration="line-through";
    });
    li.addEventListener("dblclick",function(){
        liste.removeChild(li);
    });
    sil.addEventListener("click",function(){
        li.remove();
    });
console.log(li);

});

/* */
liste.addEventListener("submit",function(event){
    event.preventDefault();
    const li=document.getElementById('liste').value;

    addStorage();
    
})


function getStorage(){//local storage'e array oluşturmak
    let todo;
    if(localStorage.getItem("todo")===null){
        todo=[];
    }
    else{
        todo=JSON.parse(localStorage.getItem("todo"));
    }
    return todo;

}



function addStorage(li){

    let todo=getStorage();
    todo.push(li);
    localStorage.setItem("todo",JSON.stringify(todo));

}

/*  Local Storage'den silme  */


document.addEventListener("DOMContentLoaded",loadAllTodos)
    function loadAllTodos(){
        let todos=getStorage();
        todos.forEach(function (todo){
            const li=document.createElement("li");
            li.classList.add('yeni');
            liste.appendChild(li);
            li.innerHTML=todo;

            li.addEventListener("click", function(){
                li.style.textDecoration="line-through";
            });
            li.addEventListener("dblclick",function(){
                liste.removeChild(li);
                removeAllUI(todo);
            });
            sil.addEventListener("click",function(){
                li.remove();
                removeAllUI(todo);

            })
        }
)}

function removeAllUI(todo){
    let todos=getStorage();
    todos.forEach(function(item, index){
        if(item===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todo",JSON.stringify(todos))
}