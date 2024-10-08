// Fetch All Pets
const loadAllPets = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    const allPets = data.pets;

    const cardsContainer = document.getElementById("cardsContainer");

    allPets.forEach((pet) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="border rounded-lg flex flex-col space-y-3 p-4">
                <div>
                    <img class="rounded-lg w-full bg-cover" src="${pet.image}" alt="">
                </div>
                <div>
                    <h4 class="text-xl font-bold">${pet.pet_name}</h4>
                    <div class="text-xs">
                        <p><i class="fa-solid fa-seedling"></i> Breed: ${pet.breed} </p>
                        <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
                        <p><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
                        <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</p>
                    </div>
                </div>
                <hr>
                <div class="flex flex-row space-x-3">
                    <!-- Pass the petId to the addLikedPhoto function when this button is clicked -->
                    <button onclick="addLikedPhoto('${pet.petId}', '${pet.image}')" class="border rounded-lg px-2 py-0">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button id="adoptBTN" onclick="myModal.showModal(); setInt(); startCountdown()" class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Adopt</button>
                    <button onclick="showModal()" class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Details</button>
                </div>
            </div>
        `;

        cardsContainer.appendChild(div);
    });
};

// modal is here
const showModal = () => {
    
}



// Updated addLikedPhoto function
const addLikedPhoto = async (petId, image) => {
    // Call the API for the specific pet that was liked
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    const data = await res.json();

    // Append the liked pet's image to the likedPets container
    const likedPets = document.getElementById("likedPets");
    const div = document.createElement("div");

    div.innerHTML = `        
        <img class=" w-[120px] m-2 bg-cover" src="${image}" alt="">      
    `;

    likedPets.appendChild(div);
};


// Fetch All Pet Categories
const fetchCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await res.json();
    const allPetsCategory = data.categories;

    allPetsCategory.forEach((category) => {
        console.log(category.category);
    })
   
};


// Fetch Pets by Category
// Dogs category ID
const petFetchByCategory = async () => {
    document.getElementById("cardsContainer").innerHTML= '';
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`);
    const data = await res.json();
    const petCategoryByID = data.data;

    if(petCategoryByID.length === 0){
        document.getElementById("cardsContainer").classList.remove("grid");
        const div = document.createElement("div");
        div.innerHTML=`
        <div class="flex flex-col justify-center items-center">
        <img class="w-[40%]" src="images/error.webp" alt="">
        <p class="font-bold text-4xl text-center">
        No Information Available
        </p>
        <p class="text-xs text-center w-[60%]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        </div>
        `;

           cardsContainer.appendChild(div);
    }
    else{

        petCategoryByID.forEach(async(petId) => {
            const petID = petId.petId;
            document.getElementById("cardsContainer").classList.add("grid"); 
            
            const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petID}`);
            const data = await res.json();
            const pet = data.petData;
            
            const div = document.createElement("div");
            
            div.innerHTML = `
            <div class="border rounded-lg flex flex-col space-y-3 p-4">
            <div>
            <img class="rounded-lg w-full bg-cover" src="${pet.image}" alt="">
            </div>
            <div>
            <h4 class="text-xl font-bold">${pet.pet_name}</h4>
            <div class="text-xs">
            <p><i class="fa-solid fa-seedling"></i> Breed: ${pet.breed} </p>
            <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
            <p><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</p>
            </div>
            </div>
            <hr>
            <div class="flex flex-row space-x-3">
            <!-- Pass the petId to the addLikedPhoto function when this button is clicked -->
            <button onclick="addLikedPhoto('${pet.petId}', '${pet.image}')" class="border rounded-lg px-2 py-0">
            <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Adopt</button>
                    <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Details</button>
                    </div>
                    </div>
                    `;
                    
                    cardsContainer.appendChild(div);
                })
            }
            }


// Cats category ID
const petFetchByCategory2 = async () => {
    document.getElementById("cardsContainer").innerHTML= '';
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`);
    const data = await res.json();
    const petCategoryByID = data.data;
    
    if(petCategoryByID.length === 0){
        document.getElementById("cardsContainer").classList.remove("grid");
        const div = document.createElement("div");
        div.innerHTML=`
        <div class="flex flex-col justify-center items-center">
        <img class="w-[40%]" src="images/error.webp" alt="">
        <p class="font-bold text-4xl text-center">
        No Information Available
        </p>
        <p class="text-xs text-center w-[60%]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        </div>
        `;

           cardsContainer.appendChild(div);
    }
    else{

        petCategoryByID.forEach(async(petId) => {
            const petID = petId.petId; 
            document.getElementById("cardsContainer").classList.add("grid");
            
            const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petID}`);
            const data = await res.json();
            const pet = data.petData;
            
            const div = document.createElement("div");
            
            div.innerHTML = `
            <div class="border rounded-lg flex flex-col space-y-3 p-4">
            <div>
            <img class="rounded-lg w-full bg-cover" src="${pet.image}" alt="">
            </div>
            <div>
            <h4 class="text-xl font-bold">${pet.pet_name}</h4>
            <div class="text-xs">
            <p><i class="fa-solid fa-seedling"></i> Breed: ${pet.breed} </p>
            <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
            <p><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</p>
            </div>
            </div>
            <hr>
            <div class="flex flex-row space-x-3">
            <!-- Pass the petId to the addLikedPhoto function when this button is clicked -->
            <button onclick="addLikedPhoto('${pet.petId}', '${pet.image}')" class="border rounded-lg px-2 py-0">
            <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Adopt</button>
            <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Details</button>
            </div>
            </div>
            `;
            cardsContainer.appendChild(div);
            // console.log(pet);
        })
    }
}


// Rabbits category ID
const petFetchByCategory3 = async () => {
    document.getElementById("cardsContainer").innerHTML= '';
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/rabbit`);
    const data = await res.json();
    const petCategoryByID = data.data;

    if(petCategoryByID.length === 0){
        document.getElementById("cardsContainer").classList.remove("grid");
        const div = document.createElement("div");
        div.innerHTML=`
        <div class="flex flex-col justify-center items-center">
        <img class="w-[40%]" src="images/error.webp" alt="">
        <p class="font-bold text-4xl text-center">
        No Information Available
        </p>
        <p class="text-xs text-center w-[60%]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        </div>
        `;

           cardsContainer.appendChild(div);
    }
    else{

        petCategoryByID.forEach(async(petId) => {
            const petID = petId.petId; 
            document.getElementById("cardsContainer").classList.add("grid");
            
            const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petID}`);
            const data = await res.json();
            const pet = data.petData;
            
            const div = document.createElement("div");
            
            div.innerHTML = `
            <div class="border rounded-lg flex flex-col space-y-3 p-4">
            <div>
            <img class="rounded-lg w-full bg-cover" src="${pet.image}" alt="">
            </div>
            <div>
            <h4 class="text-xl font-bold">${pet.pet_name}</h4>
            <div class="text-xs">
            <p><i class="fa-solid fa-seedling"></i> Breed: ${pet.breed} </p>
            <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
            <p><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</p>
            </div>
            </div>
            <hr>
            <div class="flex flex-row space-x-3">
            <!-- Pass the petId to the addLikedPhoto function when this button is clicked -->
            <button onclick="addLikedPhoto('${pet.petId}', '${pet.image}')" class="border rounded-lg px-2 py-0">
            <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Adopt</button>
            <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Details</button>
            </div>
            </div>
            `;
            cardsContainer.appendChild(div);
        })
    }
}


// Birds category ID
const petFetchByCategory4 = async () => {
    document.getElementById("cardsContainer").innerHTML= '';
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/bird`);
    const data = await res.json();
    const petCategoryByID = data.data;
    if(petCategoryByID.length === 0){
        document.getElementById("cardsContainer").classList.remove("grid");
        const div = document.createElement("div");
        div.innerHTML=`
        <div class="flex flex-col justify-center items-center">
        <img class="w-[40%]" src="images/error.webp" alt="">
        <p class="font-bold text-4xl text-center">
        No Information Available
        </p>
        <p class="text-xs text-center w-[60%]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        </div>
        `;

           cardsContainer.appendChild(div);
    }
    else{


        petCategoryByID.forEach(async(petId) => {
            const petID = petId.petId; 
            document.getElementById("cardsContainer").classList.add("grid");
            const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petID}`);
            const data = await res.json();
            const pet = data.petData;
    
            const div = document.createElement("div");
    
            div.innerHTML = `
                <div class="border rounded-lg flex flex-col space-y-3 p-4">
                    <div>
                        <img class="rounded-lg w-full bg-cover" src="${pet.image}" alt="">
                    </div>
                    <div>
                        <h4 class="text-xl font-bold">${pet.pet_name}</h4>
                        <div class="text-xs">
                            <p><i class="fa-solid fa-seedling"></i> Breed: ${pet.breed} </p>
                            <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
                            <p><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
                            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex flex-row space-x-3">
                        <!-- Pass the petId to the addLikedPhoto function when this button is clicked -->
                        <button onclick="addLikedPhoto('${pet.petId}', '${pet.image}')" class="border rounded-lg px-2 py-0">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Adopt</button>
                        <button class="border rounded-lg px-3 py-0 text-[#0E7A81] font-bold">Details</button>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(div);
        })
    }

    
}




// // // auto click after three seconds on modal close button
const setInt = () => {
    setTimeout(() => {
        document.getElementById("closeBTN").click();
    }, 4000);
}

// // countdown timer for three seconds
function startCountdown() {
    let countdownTime = 3;
  const countdownElement = document.getElementById("countdown");
    
  const interval = setInterval(() => {
    countdownElement.textContent = countdownTime;
    if (countdownTime <= 0) {
      clearInterval(interval);
      countdownElement.textContent = "";
    }
    countdownTime--;
  }, 1000); 
}



loadAllPets();
