document.body.style.overflow = "auto";

document.body.style.userSelect = "auto";

document.body.style.filter = "blur(0px)";

var elems = document.querySelectorAll( 'body *' );

elems.forEach(element => {
    element.style.overflow = "auto";
    element.style.userSelect = "auto";
    element.style.filter = "blur(0px)";
});

elems.forEach(element => {
    if (element.id.includes("overlay"))
    {
        element.remove();
    }
})