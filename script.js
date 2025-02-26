// category
// : 
// "Cat"
// category_icon
// : 
// "https://i.ibb.co.com/N7dM2K1/cat.png"
// id
// : 
// 1

// buttton details from api
const categories=async()=>{
   try {
    const response=await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data=await response.json();
    const button_data=data.categories;
    make_all_button(button_data)
   } catch (error) {
    console.error('Error fetching categories:', error);
   }
}
categories();
const all_button=document.getElementById('all-button');
const make_all_button=(button_data)=>{
    button_data.forEach(btn_single_data => {
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="display_categories('${btn_single_data.category}')" class="btn w-[312px] h-[104px] flex gap-4 rounded-lg bg-white border border-[#0e798125] "><img  src="${btn_single_data.category_icon}" alt="" srcset="">
    <h1 class="text-3xl font-bold">${btn_single_data.category}</h1></button>

        `
        all_button.appendChild(div);
    });
    
}
// "petId": 1,
// "breed": "Golden Retriever",
// "category": "Dog",
// "date_of_birth": "2023-01-15",
// "price": 1200,
// "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
// "gender": "Male",
// "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
// "vaccinated_status": "Fully",
// "pet_name": "Sunny"



// pet container
const pet_container=document.getElementById('pets-container');

const all_pet_data=async(categories)=>{
   try {
    const response =await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data=await response.json();
    const pet_data=data.pets;
    load_pet_details(pet_data);
    
   } catch (error) {
    console.error('find pet eror',error);
    
   }
}
all_pet_data();

const load_pet_details=async(pet_data)=>{
    
    pet_container.innerHTML='';
    pet_data.forEach(single_pet_details => {
        console.log(single_pet_details);
        
        const new_div=document.createElement('div');
        new_div.classList=`h-auto border bg-base-100 w-96 shadow-sm rounded-xl`
        new_div.innerHTML=`<figure class="px-5 pt-5">
              <img
                src=${single_pet_details.image}
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="">
              <h2 class="card-title my-3 text-2xl ms-5">${single_pet_details.pet_name}</h2>
<div id="" class="flex flex-col gap-2 ms-5">
    <span id="" class="flex">
        <img class="w-5 h-5" src="images/icon/grid-4-svgrepo-com.svg" alt=""></img>
        <p>Breed:</p> <p id="">${ !single_pet_details.breed || single_pet_details.breed.length === 0  ? 'unknown' : single_pet_details.breed
        }</p>
    </span>
    <span id="" class="flex">
        <img class="w-5 h-5" src="images/icon/date-svgrepo-com.svg" alt="">
        <p>Birth:</p>
        <p id="">${ !single_pet_details.date_of_birth || single_pet_details.date_of_birth.length === 0  ? 'unknown' : single_pet_details.date_of_birth
        }</p>
    </span>
    <span id="" class="flex">
        <img  class="w-5 h-5" src="images/icon/gender-female-svgrepo-com.svg" alt="">
        <p>Gender:</p>
        <p id="">${ !single_pet_details.gender|| single_pet_details.gender.length === 0  ? 'unknown' : single_pet_details.gender
        }</p>
    </span>
    <span id="" class="flex">
        <img class="w-5 h-5" src="images/icon/money-svgrepo-com.svg" alt="">
        <p>Price:</p>
        <p id="">${ !single_pet_details.price || single_pet_details.price.length === 0  ? 'update later' : single_pet_details.price
        } $</p>
    </span>
    
</div>             
<hr class="mb-5 mt-5 mx-4">
<div class="card-actions flex justify-evenly mb-5">
                <button class="btn bg-white"><img class="w-8 h-8" src="images/icon/like-svgrepo-com.svg" alt="" srcset=""></button>
                <button class="btn bg-white text-2xl text-teal-600">Adopt</button>
                <button class="btn bg-white text-2xl text-teal-600">Details</button>
              </div>
            </div>
          </div>
`
pet_container.appendChild(new_div);
        
    });
}
// view button scroll
const view_button=document.getElementById('view_more_btn');
view_button.addEventListener('click',function (e) {
    window.scrollTo(0,300);
})

// display categories
const display_categories=async(categoryName)=>{
const click_category=await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
const category_data=await click_category.json();
load_pet_details(category_data.data);
console.log(category_data.data);

}