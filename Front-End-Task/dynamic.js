var quantity_input = document.getElementById('quantity');
var PageNumber = document.getElementById('page-number');
var forwardButton=document.getElementById('forward-button');
var backwardButton=document.getElementById('backward-button');
var firstPage=1;
var allowedDivs=3;
var currentPage = firstPage;
var lastPage =firstPage;

// alert("Begin :"+currentPage);
// alert("Begin :"+lastPage);

forwardButton.addEventListener('click', ()=>{
    if(currentPage<lastPage){
        currentPage++;
        // alert("Changed Current Page F:"+currentPage);
        PageNumber.innerText=currentPage;
        renderCurrentPage(currentPage);
    }
})

backwardButton.addEventListener('click', ()=>{
    if(currentPage>1){
        currentPage--;
        // alert("Changed Current Page B:"+currentPage);
        PageNumber.innerText=currentPage;
        renderCurrentPage(currentPage);
    }
})

quantity_input.addEventListener('change', ()=>{
    // alert(quantity_input.value);
    currentPage=1;
    lastPage=Math.ceil(quantity_input.value/3);
    // alert("Changed Current Page :"+currentPage);
    // alert("Changed Last Page :"+lastPage);
    renderCurrentPage(currentPage);
})

createDiv = (divNumberGlobal, divPageID, divNumberLocal) => {

    let newDiv=document.createElement('div');
    let newNumberDiv=document.createElement('div');
    let divHeading=document.createElement('h3');
    let diskHeading=document.createElement('h4');
    let diskHeadingContent=document.createTextNode(divNumberGlobal);
    let headingContent=document.createTextNode("ITEM " + divPageID+ divNumberLocal);

    divHeading.appendChild(headingContent);
    diskHeading.appendChild(diskHeadingContent);
    newNumberDiv.appendChild(diskHeading);
    newDiv.appendChild(newNumberDiv);
    newDiv.appendChild(divHeading);

    newDiv.classList.add('div-generated');
    newNumberDiv.classList.add('disk-number');
    divHeading.classList.add('text-div'); 
    
    return newDiv;
}

deletePreviousDivs=() => {
    var all_div_generated = document.querySelectorAll('.div-generated');

    for(var i=0;i<all_div_generated.length;i++){
        all_div_generated[i].parentNode.removeChild(all_div_generated[i]);
    }
}

renderCurrentPage=(currentPage) => {
    deletePreviousDivs();

    let rightContainer = document.querySelector('#right-container');
    let block_number=(currentPage-firstPage)*allowedDivs+firstPage;
    for(var i=1;i<=allowedDivs && block_number<=quantity_input.value;i++){
        newDiv = createDiv(block_number, String.fromCharCode(currentPage+64), i);
        rightContainer.appendChild(newDiv);
        block_number++;
    }
}