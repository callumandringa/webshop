const medium = document.getElementById("rondjes-medium")
const large = document.getElementById("rondjes-large")
const xxl = document.getElementById("rondjes-xxl")
const image = document.getElementById("image-bigger")

medium.onclick = function(){
    image.style.scale = "1"

}


large.onclick = function(){
    image.style.scale = "1.2"

}


xxl.onclick = function(){
    image.style.scale = "1.3"

};