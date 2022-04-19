/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :DD')

const base_url = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
// Web API -- Lo visto en clase

/*
// Conectarnos al server
window.fetch(api_url)
// Procesar la respuesta y convertirla en JSON
.then(answer => answer.json())
// Data -> Render
.then((info) => {
        const allItems = [];

        info.data.forEach((item) => {
        //img
        const img = document.createElement('img');
        //name
        const name = document.createElement('h2');
        //price
        const price = document.createElement('div');

        const container = document.createElement('div');
        container.append(img, name, price);
        allItems.push(container);
    });
    document.body.append(...allItems);
});
*/


// Reto: Hacerlo con asincronismo
async function fetchData() {
    const allItems = [];
    try {
        // Conectarnos al server
        const response = await fetch(`${base_url}/api/avo`);
        // Procesar la respuesta y convertirla en JSON
        const info = await response.json();
        // data -> render
        info.data.forEach((item) => {
            // create img
            const img = document.createElement('img');
            img.src = `${base_url}${item.image}`;

            // create name
            const name = document.createElement('h2');
            name.textContent = item.name;

            //create price
            const price = document.createElement('div');
            price.textContent = `$${item.price}`;

            const container = document.createElement('div');
            container.append(img, name, price);
            allItems.push(container);
        });
    } catch (error) {
        console.error(error);
    }
    appNode.append(...allItems);
}

fetchData();
