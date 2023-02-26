const loadPhone = (name) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${name}`;
  fetch(URL)
    .then((res) => res.json())
    .then((phones) => displayPhone(phones.data));
};

const displayPhone = (phones) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  phones = phones.slice(0, 10);
  //get no phone msg
  const noFound = document.getElementById('no-phone-msg')
  if(phones.length == 0){
    noFound.classList.remove('hidden')
  }
  
  phones.forEach((phone) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `
        <div class="shadow-xl rounded-lg w-56 p-5 space-y-4">
        <img class="rounded-2xl w-fit mx-auto" src="${phone.image}" alt="">
        <h1><span class="font-semibold">Brand</span> : ${phone.brand} </h1>
        <h1><span class="font-semibold">Name</span> : ${phone.phone_name}</h1>
        <button class="py-2 px-4 bg-teal-400 rounded-lg hover:bg-teal-300 transition-all font-semibold text-white">Buy Now</button>
    </div>
    `;
    container.appendChild(newElement);
  });
};

document.getElementById("search-btn").addEventListener("click", function () {
  const value = document.getElementById("search-field").value;
  loadPhone(value);
});

loadPhone('a');
