/////////////////////////////////////
// ASYNC CLONE WAIT DATASET DATA- //
///////////////////////////////////

async function getList(url_productlist) {
    // hent json
    let result = await fetch(url_productlist);
    // put resultatet i et array
    produktListe = await result.json();
    console.log("ProduktListe", produktListe);

    // vis de enkelte personer i html med en template
    produktListe.forEach( function (produkt) {
        let the_clone = document.querySelector("#the_template").content.cloneNode(true);
        the_clone.querySelector("h1").textContent = produkt.navn;
        the_clone.querySelector("img").src = "imgs/small/" + produkt.billede + "-sm.jpg";

        the_clone.querySelector("article").dataset.dish_id = produkt.id

        document.querySelector(".modtager").appendChild(the_clone);

    });

}


//////////////////////
// ASYNC LOAD JSON //
////////////////////

async function getList(url_productlist) {
    // hent json
    let result = await fetch(url_productlist);
    // put resultatet i et array
    var produktListe = await result.json();

}

////////////////////////////////
// TEMPLATE CLONE APPENDCHILD//
//////////////////////////////

let the_clone = document.querySelector("#the_template").content.cloneNode(true);

document.querySelector(".modtager").appendChild(the_clone);

////////////////////////////////////////////
// LOAD DOCUMENT ONLOAD DOMCONTENTLOADED //
//////////////////////////////////////////

document.addEventListener("DOMContentLoaded", koerScriptet)
//The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A very different event load should be used only to detect a fully-loaded page. It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.

window.addEventListener("load",koerScriptet)
//The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.



////////////////////
// CLASSLIST ADD //
//////////////////

 document.querySelector("article").classList.add("vegetar");

/////////////////////
//QUERYSELECTORALL//
///////////////////

document.querySelectorAll(".vegetar").forEach( function ( i ) {i.style.backgroundColor = "blue"});
// eller
document.querySelectorAll(".vegetar").forEach( i => {i.style.backgroundColor = "blue"});



/////////////
////FIND////
///////////



let et_array_af_objekter = [{id:21,navn:"Frank"},{id:22,navn:"Sigurd"},{id:56,navn:"Alma"}];
let id_to_find = 22;
let result = et_array_af_objekter.find(function(element){return  element.id == id_to_find; });
//eller
//let find_id_56 = et_array_af_objekter.find(element => {return  element.id == id_to_find; });

console.log("Resultatet er",result); // {id: 22, navn: "Sigurd"}








