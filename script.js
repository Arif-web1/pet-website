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
        // console.log(single_pet_details);
        
        const new_div=document.createElement('div');
        new_div.classList=`h-auto border bg-base-100 w-[365px] shadow-sm rounded-xl`
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
                <button onclick="select_pet('${single_pet_details.image}')" class="btn bg-white"><img class="w-8 h-8" src="images/icon/like-svgrepo-com.svg" alt="" srcset=""></button>
                <button class="btn bg-white text-2xl text-teal-600">Adopt</button>
                <button onclick="modal_id('${single_pet_details.petId}')" class="btn bg-white text-2xl text-teal-600">Details</button>
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
// select pet area
const select_area=document.getElementById('select-area');
const select_pet=(pet_img)=>{
    const new_img=document.createElement('img');
    new_img.src=`${pet_img}`
    select_area.appendChild(new_img);

   
    
}
// modal details
const modal_id=async(modal_id)=>{
    try {
        const response=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${modal_id}`);
    const data=await response.json();
    const each_data=data.petData
    open_modal(each_data);
    } catch (error) {
        console.error('modal data eror',error);
        
    }
    
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
const modal_container = document.getElementById('my_modal_4');
const modal_content = document.getElementById('modal-content');

const open_modal = (each_data) => {
    if (!modal_container || !modal_content) {
        console.error("Modal container or content section not found!");
        return;
    }

    modal_content.innerHTML = `
      <div>
        <img class="w-[636PX] h-[320PX]" src="${each_data?.image || 'images/default.jpg'}" alt="Pet">
                      <h2 class="card-title my-3 text-2xl ms-5">${each_data.pet_name}</h2>

        <div class="flex flex-col gap-2 ms-5">
          <span class="flex">
            <img class="w-5 h-5" src="images/icon/grid-4-svgrepo-com.svg" alt="">
            <p>Breed:</p> <p>${ each_data?.breed?.length ? each_data.breed : 'Unknown' }</p>
          </span>
          <span class="flex">
            <img class="w-5 h-5" src="images/icon/date-svgrepo-com.svg" alt="">
            <p>Birth:</p> <p>${ each_data?.date_of_birth?.length ? each_data.date_of_birth : 'Unknown' }</p>
          </span>
          <span class="flex">
            <img class="w-5 h-5" src="images/icon/gender-female-svgrepo-com.svg" alt="">
            <p>Gender:</p> <p>${ each_data?.gender?.length ? each_data.gender : 'Unknown' }</p>
          </span>
          <span class="flex">
            <img class="w-5 h-5" src="images/icon/money-svgrepo-com.svg" alt="">
            <p>Price:</p> <p>${ each_data?.price?.length ? each_data.price : 'Update later' } $</p>
          </span>
        </div>             
        <div>
          <h1>Details information</h1>
          <p class="">${each_data.pet_details}</p>
        </div>

        <!-- Close Button Inside Modal -->
        <div class="modal-action">
            <button id="close-modal-btn" class="btn btn-block bg-red-500 text-white">Close</button>
        </div>
      </div>
    `;

    modal_container.showModal();

    // Close modal when the close button is clicked
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        modal_container.close();
    });
};
