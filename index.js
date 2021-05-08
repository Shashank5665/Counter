//initial count
let count = 0;

//selecting values and buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");   

//Main logic
btns.forEach(function (btn){
    btn.addEventListener("click", function(i){
        var list = i.currentTarget.classList;
        if(list.contains("decrease")){
            count--;
        }
        else if(list.contains("reset")){
            count=0;
        }
        else{
            count++;
        }

//Changing the colors for the number
        value.innerHTML = count
        if(count<0){
            value.style.color = "#DC5A5A";
        }
        if(count===0){
            value.style.color = "#FFFECB";
        }
        if(count>0){
            value.style.color = "#88C359";
        }
    })
})
