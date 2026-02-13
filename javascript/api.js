const API_KEY = "live_Hu8ooDQc3aZDhA3Vk82FgqUMyesUjRtNUHO3m0b3qOWevvbpXKoRI2qeGrYxpKWE";
const BASE_URL = "https://api.thecatapi.com/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY
  }
});

export async function getBreeds() {
  const response = await api.get("/breeds");
  return response.data;
}

export async function searchCats(breedId, page = 0) {
  const response = await api.get("/images/search", {
    params: {
      limit: 8,
      page: page,
      breed_ids: breedId
    }
  });

  return response.data;
}

export async function addFavorite(imageId) {
  const response = await api.post("/favourites", {
    image_id: imageId
  });

  return response.data;
}

export async function getFavorites() {
  const response = await api.get("/favourites");
  return response.data;
}

export async function deleteFavorite(favId) {
  await api.delete(`/favourites/${favId}`);
}
