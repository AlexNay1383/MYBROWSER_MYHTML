var elems = document.querySelectorAll( 'body *' );

console.log("uselect");

elems.forEach(element => {
    element.style.userSelect = "auto";
});