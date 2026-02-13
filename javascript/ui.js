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
        const col = document.createElement("div");
        col.classname = "col-md-4 col-lg-3"
        col.innerHTML = `
    <div class = "card shadow-sm h-100">
      <img src="${image.url}" class="card-img-top" alt="Cat">
      <div class="card-body text-center">
      <button class="btn btn-danger w-100" data-id="${image.id}">
    `;
        gallery.appendChild(col);
    });
}

export function renderFavorites(favorites) {
    const container = document.getElementById("favorites");
    container.innerHTML = "";

    favorites.forEach(fav => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-lg-3";

        col.innerHTML = `
      <div class="card shadow-sm h-100">
        <img src="${fav.image.url}" class="card-img-top" alt="Favorite Cat">
        <div class="card-body text-center">
          <button class="btn btn-outline-danger w-100" data-id="${fav.id}">
            ❌ Remove
          </button>
        </div>
      </div>
    `;

        container.appendChild(col);
    });
}

