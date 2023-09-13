import './slider'
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', ()=>{
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    modals('.phone_link', '.popup', '.popup .popup_close')
    tabs('.glazing_slider','.glazing_block',  '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')

})



console.log(1)