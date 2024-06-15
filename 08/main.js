const imgContainer = document.querySelector(".image-container");

const apiKey = "k4V7VO8JHHLvHg7ji_-8baXPs1FjC-0SoHLHjEaCDgc";
const conut = 10;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${conut}`;
let photoArray = [];

async function getData() {
  try {
    const getApi = await fetch(apiUrl);
    photoArray = await getApi.json();
    console.log(photoArray);
    displayPhoto();
  } catch {}
}

const displayPhoto = function () {
  for (const photo of photoArray) {
    console.log(photo);
    const item = document.createElement("a");
    item.href = photo.links.html
    item.target ="_blank"

    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    img.src = photo.urls.regular
    img.alt = photo.alt_description
    img.title = photo.alt_description

    item.appendChild(img);
    imgContainer.appendChild(item)
  }
};

getData();
