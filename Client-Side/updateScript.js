const updateFormEl = document.querySelector("#updateForm")
const containerEl = document.querySelector("#container")


let data = []
axios.get('http://localhost:3000/api/products')
    .then(res => {
        data = res.data.products;
        console.log(data[0].name);
        formInner(data)
        // render(  )
    })
    .catch(err => {
        console.log(err);
        container.innerText = 'There is a problem'
    })




// containerEl.innerHTML = $`data`

const formInner= data=> {
containerEl.innerHTML = `<form id="addForm">
<input type="text" name="name" id="name" value= ${data[0].name}>
<input type="text" name="cat" id="cat" value= ${data[0].cat}>
<input type="text" name="image" id="image" value= ${data[0].image}>
<input type="text" name="price" id="price" value= ${data[0].name}>
<input type="submit" value="Add Product">
</form>`;
}
// containerEl.innerHTMl = `
//         < form id = "addForm" >
//         <input type="text" name="name" id="name" value="111">
//             <input type="text" name="cat" id="cat" placeholder="Category">
//                 <input type="text" name="image" id="image" placeholder="Image">
//                     <input type="text" name="price" id="price" placeholder="Price">
//                         <input type="submit" value="Add Product">
//                         </form>
// `







// < form id = "addForm" >
//     <input type="text" name="name" id="name" value="abc">
//         <input type="text" name="cat" id="cat" placeholder="Category">
//             <input type="text" name="image" id="image" placeholder="Image">
//                 <input type="text" name="price" id="price" placeholder="Price">
//                     <input type="submit" value="Add Product">
//                     </form>