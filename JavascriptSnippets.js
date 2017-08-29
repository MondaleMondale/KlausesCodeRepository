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
