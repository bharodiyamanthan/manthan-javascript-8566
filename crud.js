let addform = document.getElementById("add-form");
let editform = document.getElementById("edit-form");

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#bookname')
    let price = document.querySelector('#price')
    let category = document.querySelector('#category')
    let author = document.querySelector('#author')
    let oldData = JSON.parse(localStorage.getItem('book')) || []
    let newBook = {
        title: title.value,
        price: price.value,
        category: category.value,
        author: author.value
    };
    oldData.push(newBook);
    localStorage.setItem('book', JSON.stringify(oldData));
    loadData()
    title.value = ""
    price.value = ""
    category.value = ""
    author.value = ""
})
function loadData() {
    let books = JSON.parse(localStorage.getItem('book'))
    let result = ""
    books.forEach((book, index) => {
        row = `<tr>
        <td>${index + 1}</td>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.category}</td>
        <td>${book.author}</td>
        <td><button onclick="deleteRec(${index})">delete</button> ||<button onclick="editRec(${index})">edit</button></td>
        
        </tr>`
        result = result + row;
    });
    document.querySelector('#bookView').innerHTML = result;
}
loadData()


function deleteRec(index){
    let alldata = JSON.parse(localStorage.getItem('book'));
    alldata.splice(index,1);
    localStorage.setItem('book',JSON.stringify(alldata));
    loadData()
}

function editRec(index){
    let alldata = JSON.parse(localStorage.getItem('book'));
    let editrecord = alldata[index];
    console.log(index);
    

    editbookname.value = editrecord.title;
    editprice.value = editrecord.price;
    editcategory.value = editrecord.category;
    editauthor.value = editrecord.author;

    addform.style.display = "none";
    editform.style.display = "block";
}