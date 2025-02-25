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
        <button class="btn w-[312px] h-[104px] flex gap-4 rounded-lg bg-white border border-[#0e798125] "><img  src="${btn_single_data.category_icon}" alt="" srcset="">
    <h1 class="text-3xl font-bold">${btn_single_data.category}</h1></button>

        `
        all_button.appendChild(div);
    });
    
}