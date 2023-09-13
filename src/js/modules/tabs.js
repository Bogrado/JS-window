const tabs = (tabsHeader, tabsSelector, contentSelector, activeClass) =>{
    const header = document.querySelector(tabsHeader),
          tabs = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        content.forEach(item =>{
            item.style.display = 'none'
        })

        tabs.forEach(item =>{
            item.classList.remove(activeClass)
        })
    }

    const showTabContent = (index = 0) => {
        content[index].style.display = 'block'
        tabs[index].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (event)=>{
        const target = event.target

        if(target && target.matches(tabsSelector) || target.parentNode.matches(tabsSelector))

        if(target.matches(tabsSelector) || target.parentNode.matches(tabsSelector)){
            tabs.forEach((item, index)=>{
                if(target === item || target.parentNode === item){
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })
}

export default tabs