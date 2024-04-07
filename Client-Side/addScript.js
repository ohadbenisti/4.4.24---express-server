let addFormDetails = {}

const addForm = document.querySelector('#addForm')
const containerEl = document.querySelector('#container')



addForm.addEventListener('input', e => {
    const { name, value } = e.target
    if (name == 'price') {
        addFormDetails[name] = Number(value)
    } else {
        addFormDetails[name] = value
    }
    console.log(addForm)
})

addForm.addEventListener('submit', async e => {
    e.preventDefault()
    const result = await axios.post('http://localhost:3000/api/products', addFormDetails)
    form.reset()
    addFormDetails = {}
    containerEl.innerHTML = `THE ADDING HAS SUCCESS!`
})



