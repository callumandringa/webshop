let allGames = document.getElementsByClassName("game")

let products = document.getElementsByClassName("products");

let filters = document.getElementsByClassName("filter");

let Youtubers = document.getElementById("Youtubers-checkbox")

console.log(products);

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
},1500);


for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

Youtubers.onchange = function(){ 
    if(Youtubers.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.category === 'Youtubers'){
                products[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.category === 'Youtubers'){
                products[i].style.display = "none";
            }
        }

    }
}



let TvShows = document.getElementById("checkbox-TVShow")

TvShows.onchange = function(){
    if(TvShows.checked === true){
        for(let i = 0; i <  products.length; i++){
            if( products[i].dataset.category === 'TVShows'){
                products[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i <  products.length; i++){
            if( products[i].dataset.category === 'TVShows'){
                products[i].style.display = "none";
            }
        }
    
    }
    }


let game = document.getElementById("checkbox-Games")

game.onchange = function(){
    if(game.checked === true){
        for(let i = 0; i <  products.length; i++){
            if( products[i].dataset.category === 'Games'){
                products[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i <  products.length; i++){
            if( products[i].dataset.category === 'Games'){
                products[i].style.display = "none";
            }
        }
    
    }
    }





    const addToCartButtons = document.getElementsByClassName("games__button");
    let cartMessage = 0;
    const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
    const shoppingModal = document.getElementById("shoppingModal");
    let modalIsOpen = false;
    let buzz = 0;
    let iron = 0;
    let c3po = 0;
    
    for(let i = 0; i < addToCartButtons.length; i++){
        addToCartButtons[i].onclick = function(){
            cartMessage += 1;
            cartMessageValue.innerHTML = cartMessage
            switch(addToCartButtons[i].dataset.product){
                case "Buzz":
                    buzz+= 1;
                    break
                case "ironman":
                    iron+= 1;
                break
                case "C3po":
                    c3po+= 1;
                    break
            }
            if(modalIsOpen === false){
                shoppingModal.style.display = "flex";
                modalIsOpen = true;
                setTimeout(function(){
                    shoppingModal.style.display = "none";
                    modalIsOpen = false;
                },2000);
            }
          
        } 
    }
    

    
    