var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})


var prosearch = document.getElementById("prosearch")
var procontainer = document.getElementById("procontainer")
var productlistdiv = procontainer.querySelectorAll("div")
var productlist = procontainer.querySelectorAll("h1")


prosearch.addEventListener("keyup", function () {
    for (count = 0; count < productlistdiv.length; count++)
        if (productlist[count].textContent.toUpperCase().indexOf(prosearch.value.toUpperCase()) < 0) {
            productlistdiv[count].style.display="none"
        }
        else{
            productlistdiv[count].style.display="block"
        }

})
