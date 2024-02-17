var h=document.querySelector("h5");
var add = document.querySelector("#add");
var check=0;
add.addEventListener("click",function(){
    if(check == 0){
        h.innerHTML= "Friends";
        h.style.color="green";
        add.innerHTML="Remove Friend"
        check=1;
    }else{
        h.innerHTML= "Unfriend";
        h.style.color="red";
        add.innerHTML="Add Friend"
        check=0;
    }
});

