const BASE_URL = `https://api.thecatapi.com/v1/images/search`;
const catBtn = document.getElementById('change-cat')

const getCat = async () => {
  try {
    const data = await (await fetch(BASE_URL)).json()
    const imageUrl = data[0].url

    document.getElementById('cat').src = imageUrl
  } catch (error) { console.error("Erro ao buscar gatinho:", error); }
};

catBtn.addEventListener('click', getCat)
