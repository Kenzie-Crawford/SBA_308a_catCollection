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
        await addFavorite(imageId);

        const favorites = await getFavorites();
        renderFavorites(favorites);
      } catch (error) {
        console.error("Add favorite error:", error);
      }
    }
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
