let currentPage = 0;


import {
    getBreeds,
    searchCats,
    addFavorite,
    getFavorites,
    deleteFavorite
} from "./api.js";

import {
    populateBreeds,
    renderGallery,
    renderFavorites
} from "./ui.js";

async function init() {
    try {
        const breeds = await getBreeds();
        populateBreeds(breeds);

        const favorites = await getFavorites();
        renderFavorites(favorites);

    } catch (error) {
        console.error("Initialization error:", error);
    }
}

document.getElementById("searchBtn")
    .addEventListener("click", async () => {
        try {
            const breedId = document.getElementById("breedSelect").value;
            currentPage = 0;
            const cats = await searchCats(breedId);
            renderGallery(cats);
        } catch (error) {
            console.error("Search error:", error);
        }
    });

document.getElementById("gallery")
    .addEventListener("click", async (event) => {
        if (event.target.tagName === "BUTTON") {
            try {
                const imageId = event.target.dataset.id;
                const newFavorite = await addFavorite(imageId);


                setTimeout(async () => {
                    const favorites = await getFavorites();
                    renderFavorites(favorites);
                }, 300);
            } catch (error) {
                console.error("Add favorite error:", error);
            }
        }
    });

document.getElementById("loadMoreBtn")
  .addEventListener("click", async (event) => {

    const button = event.target;
    button.disabled = true;

    try {
        const breedId = document.getElementById("breedSelect").value;
        currentPage++;

        const cats = await searchCats(breedId, currentPage);

        const gallery = document.getElementById("gallery");

        cats.forEach(cat => {
            const card = document.createElement("div");
            card.innerHTML = `
              <img src="${cat.url}" width="200"/>
              <button data-id="${cat.id}">❤️ Favorite</button>
            `;
            gallery.appendChild(card);
        });

    } catch (error) {
        console.error("Load more error:", error);
    }

    button.disabled = false;
});

document.getElementById("favorites")
    .addEventListener("click", async (event) => {
        if (event.target.tagName === "BUTTON") {
            try {
                const favId = event.target.dataset.id;
                await deleteFavorite(favId);

                const favorites = await getFavorites();
                renderFavorites(favorites);
            } catch (error) {
                console.error("Delete error:", error);
            }
        }
    });

init();
