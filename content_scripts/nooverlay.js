var elems = document.querySelectorAll( 'body *' );

console.log("uhm");

elems.forEach(element => {
    if (element.id.includes("overlay"))
    {
        element.remove();
    }
})