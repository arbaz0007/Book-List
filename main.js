const form =document.querySelector("#book-form")
const tableList =document.querySelector("#book-list")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
   const title =document.querySelector("#title").value

    const author =document.querySelector("#author").value
   
   const isbn = document.querySelector("#isbn").value
   
   if(title==='' || author==='' || isbn===''){
   // document.querySelector("#title").focus()   -this focus on particular field and transfer the cursor on that particular component
   alert("plese fill all the fields")
   return
   }
  
  const book ={title , author ,   isbn}
  clearAllFields()
   createRow(title,author,isbn)
   localStorage.setItem("book",JSON.stringify(title , author ,   isbn))
})



function clearAllFields(){
     document.querySelector("#title").value = ''
     document.querySelector("#author").value=''
     document.querySelector("#isbn").value=''
  
}
function createRow(title,author,isbn){
    tableList.innerHTML =`<tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#" class ="btn btn-danger float-right delete">X</td>
   </tr>`
}
arbaz khan