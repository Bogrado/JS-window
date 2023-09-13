const modals = () =>{

    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector)

        const showModal = (modal) => {
            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
            // document.body.classList.add('modal-open')
        }

        const hideModal = (modal) =>{
            modal.style.display = 'none'
            document.body.style.overflow = ''
            // document.body.classList.remove('modal-open')
        }

        trigger.forEach(element =>{
            element.addEventListener('click', (event)=>{
                console.log(event.target)
                if (event.target){
                    event.preventDefault()
                }

                showModal(modal)
            })
        })

        close.addEventListener('click', ()=>{
            hideModal(modal)
        })

        modal.addEventListener('click', (event)=>{
            if (event.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = ''
                // document.body.classList.remove('modal-open')
            }
        })
    }

    const showModalByTime = (selector, time) => {
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    showModalByTime('.popup', 2000)
}

export default modals