
const modals = (triggerSelector, modalSelector, closeSelector, windowsSelector, closeClickOverlay = true) =>{

    const bindModal = () => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll(windowsSelector)

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

        const closeAllWindows = () =>{
            windows.forEach(item =>{
                item.style.display = 'none'
            })
        }

        trigger.forEach(element =>{
            element.addEventListener('click', (event)=>{
                // console.log(event.target)
                if (event.target){
                    event.preventDefault()
                }

                closeAllWindows()

                showModal(modal)
            })
        })

        close.addEventListener('click', ()=>{
            closeAllWindows()
            hideModal(modal)
        })

        modal.addEventListener('click', (event)=>{
            if (event.target === modal && closeClickOverlay) {
                closeAllWindows()
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
    bindModal()
    // showModalByTime('.popup', 400000)
}

export default modals