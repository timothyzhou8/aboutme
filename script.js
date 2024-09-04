// YES, this code is bad! That's why I'm here to learn :)

function showContent() {
    document.querySelector("button#harmonize").remove();

    const progBarDiv = document.querySelector(".progress");
    progBarDiv.classList.add("progress-animate");
    progBarDiv.style.visibility = "visible";

    const bgDiv = document.querySelector(".bg");
    bgDiv.classList.add("fade-out");

    setTimeout(() => {
        const bubblesDiv = document.querySelector("div.bubbles");
        var bubbleChildren = bubblesDiv.children;
        for (var i = 0; i < bubbleChildren.length; i++) {
            var bubbleSpan = bubbleChildren[i];
            bubbleSpan.classList.remove("move-rand");
            bubbleSpan.classList.add("move-up");
        }
    
        const contentDiv = document.querySelector("section div.content");
        contentDiv.style.visibility = "visible";
    
        const sectionElt = document.querySelector("section");
        sectionElt.style.pointerEvents = "all";
        bgDiv.classList.remove("fade-out");
        bgDiv.classList.add("fade-in");
        sectionElt.classList.add("fade-in-zoom");
        progBarDiv.style.visibility = "hidden";
    }, 6000);      
}

/* Code snippet modified from: 
 * https://stackoverflow.com/questions/73346380/making-a-div-move-randomly-around-using-css
 */
// Set random position variables for each bubble
const bubblesDiv = document.querySelector("div.bubbles");
var bubbleChildren = bubblesDiv.children;
for (var i = 0; i < bubbleChildren.length; i++) {
    var bubbleSpan = bubbleChildren[i];
    for (let i = 0; i < 5; i++) {
        bubbleSpan.style.setProperty(`--randx${i}`, `${Math.floor(Math.random() * 95)}vw`);
        bubbleSpan.style.setProperty(`--randy${i}`, `${Math.floor(Math.random() * 95)}vh`);
    }
    bubbleSpan.classList.add("move-rand");
}