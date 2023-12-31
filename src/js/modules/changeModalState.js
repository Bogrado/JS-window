import replaceLetters from "./replaceLetters";


const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox')

    replaceLetters('#width')
    replaceLetters('#height')


    const bindActionToElems = (event, elem, prop) =>{
        elem.forEach((item, index)=>{
            item.addEventListener(event, ()=>{
                switch (item.nodeName){
                    case 'SPAN':
                        state[prop] = index
                        break
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            index === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm'
                            elem.forEach((box, j)=>{
                                box.checked = false
                                // if (index === j){
                                //     box.checked = true
                                // }
                                box.checked = index === j;
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT':
                        state[prop] = item.value
                        break
                }
                console.log(state)
            })
        })
    }

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')



}

export default changeModalState