export function populateBreeds(breeds) {
  const select = document.getElementById("breedSelect");

  breeds.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    select.appendChild(option);
  });
}

export function renderGallery(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach(image => {
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${image.url}" width="200"/>
      <button data-id="${image.id}">❤️ Favorite</button>
    `;
    gallery.appendChild(card);
  });
}

export function renderFavorites(favorites) {
  const container = document.getElementById("favorites");
  container.innerHTML = "";

  favorites.forEach(fav => {
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${fav.image.url}" width="200"/>
      <button data-id="${fav.id}">❌ Remove</button>
    `;
    container.appendChild(card);
  });
}
