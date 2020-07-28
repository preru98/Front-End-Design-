let all_checkbox = document.querySelectorAll('input[type="checkbox"]')
console.log(all_checkbox)

for(i=0;i<all_checkbox.length;i++){
    all_checkbox[i].addEventListener('change', (event)=>{
        if(event.target.style.visibility=="hidden"){
            event.target.style.visibility="visible"
        }
        else{
            event.target.style.visibility="hidden"
        }

    })
}