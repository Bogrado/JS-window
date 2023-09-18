import replaceLetters from "./replaceLetters";

const formsFunc = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    replaceLetters('input[name="user_phone"]')



    const message = {
        loading: 'loading...',
        success: 'All good',
        failure: 'Somethings wrong...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = `${message.loading}`
        let result = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })

        return await result.json()
    }

    const clearInputs = () => {
        inputs.forEach(element => element.value = '')
    }

    forms.forEach(element =>{
        element.addEventListener('submit', (event)=>{
            event.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            element.appendChild(statusMessage)

            const formData = new FormData(element)
            if (element.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key, state[key])
                }
            }
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
                .then(result =>{
                    console.log(result)
                    statusMessage.innerHTML = `${message.success}`
                })
                .catch(()=> statusMessage.innerHTML = `${message.failure}`)
                .finally(()=>{
                    clearInputs()
                    setTimeout(()=>{
                        statusMessage.remove()
                    }, 5000)
                })

        })

    })
}

export default formsFunc