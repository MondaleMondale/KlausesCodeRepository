// async clone dataset

async function getList(url_productlist) {
    // hent json
    let result = await fetch(url_productlist);
    // put resultatet i et array
    produktListe = await result.json();
    console.log("ProduktListe", produktListe);

    // vis de enkelte personer i html med en template
    produktListe.forEach(produkt => {
        let the_clone = document.querySelector("#the_template").content.cloneNode(true);
        the_clone.querySelector("h1").textContent = produkt.navn;
        the_clone.querySelector("img").src = "imgs/small/" + produkt.billede + "-sm.jpg";

        the_clone.querySelector("article").dataset.dish_id = produkt.id

        document.querySelector(".modtager").appendChild(the_clone);

    });

}



// async load JSON


async function getList(url_productlist) {
    // hent json
    let result = await fetch(url_productlist);
    // put resultatet i et array
    var produktListe = await result.json();

}


// clone appendChild

let the_clone = document.querySelector("#the_template").content.cloneNode(true);
the_clone.querySelector("article").dataset.dish_id = produkt.id
document.querySelector(".modtager").appendChild(the_clone);


// load document

document.addEventListener("DOMContentLoaded", koerScriptet)
//The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A very different event load should be used only to detect a fully-loaded page. It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.

window.onload = function() {
    //The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

};
