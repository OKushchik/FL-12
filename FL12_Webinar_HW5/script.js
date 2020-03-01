const spinner = document.getElementById("spinner");


let url = 'https://jsonplaceholder.typicode.com/users';
let urlComment = 'https://jsonplaceholder.typicode.com/comments';
spinner.removeAttribute('hidden');
fetch(url)
    .then( response => {return response.json()})
    .then(data => {
        spinner.setAttribute('hidden', '');

        for (let i = 0; i<data.length; i++) {
            delete data[i].address.geo
        }


    function draw() {
        let out = '';

        for (let i = 0; i<data.length; i++){
            let address = '';
            for (let key in data[i].address) {
                address += data[i].address[key]
            }
            let company = '';
            for (let key in data[i].company) {
                company += data[i].company[key]
            }
            let   pic = ['img/71kNvlpS9GL._AC_SX466_.jpg','img/cat_tick.jpg','img/CatScratch.jpg','img/Scottish-fold-cat-feline.jpg'];
            let k =  Math.floor(Math.random() * Math.floor(4));
                out += `
  <div class = block-item>
        <div class="pic"><img src="${pic[k]}" alt="pic"></div>
        <h3 class="block-item__name"> First name: <span>${data[i].name}</span></h3>
        <p class="block-item__nameUser"> User Name: <span>${data[i].username}</span></p>
        <p class="block-item__email"> email: <span>${data[i].email}</span></p>
        <p class="block-item__address"> address: <span>${address}</span></p>
        <p class="block-item__phone"> phone: <span>${data[i].phone}</span></p>
        <p class="block-item__website"> website: <span>${data[i].website}</span></p>
        <p class="block-item__company"> company: <span>${company}</span></p>
        <input type="submit" id='item-edit' value="Edit"> <input type="submit" id='item-delete' value="Delete">
    </div>
`
        }
        document.querySelector('.block').innerHTML = out;

        for (let i = 0; i<document.querySelectorAll('.block-item__name').length; i++) {
            document.querySelectorAll('.block-item__name')[i].addEventListener('click', getComment)

            function getComment() {
                fetch(urlComment)
                    .then(response => {
                        return response.json()
                    })
                    .then(comment => {
                        let comm;
                            for (let j = 0; j < comment.length; j++) {
                                if(data[i].email === comment[j].email){
                                    console.log(comment[j])
                                } else {
                                    comm = 'No Comments';

                                }
                            }
                        console.log(comm)
                    })
            }
        }
        let btnEdit = document.querySelectorAll('#item-edit');
        let btnDelete= document.querySelectorAll('#item-delete');
        for (let i = 0; i<btnEdit.length; i++) {
            btnDelete[i].addEventListener('click', deleteItem);
            function deleteItem() {
                data.splice(i, 1);
                fetch(`https://jsonplaceholder.typicode.com/users/${data[i].id}`, {
                    method: 'DELETE'
                })
                    .then(response => {
                        spinner.setAttribute('hidden', '');
                        if (response.status === 200) {
                            console.log('Deleted!');
                        } else {
                            spinner.setAttribute('hidden', '');
                            console.log(`Something wrong: ${response.status}`);
                        }
                    });
                draw();
            }
            btnEdit[i].addEventListener('click', editItem);
            function editItem() {
                let address = '';
                for (let key in data[i].address) {
                    address += data[i].address[key]
                }
                let company = '';
                for (let key in data[i].company) {
                    company += data[i].company[key]
                }

                let out = `
                <div class="block-item__edit">
                    <label for="block-edit__name">First name:</label>
                    <input type="text" id="block-edit__name" class="input" name="block-edit__name" value="${data[i].name}"><br><br>
                    <label for="block-edit__userName">User Name:</label>
                    <input type="text" id="block-edit__userName" class="input" name="block-edit__userName" value="${data[i].username}"><br><br>
                    <label for="block-edit__email">email:</label>
                    <input type="text" id="block-edit__email" class="input" name="block-edit__email" value="${data[i].email}"><br><br>
                    <label for="block-edit__address">address:</label>
                    <input type="text" id="block-edit__address" class="input" name="block-edit__address" value="${address}"><br><br>
                    <label for="block-edit__phone">phone:</label>
                    <input type="text" id="block-edit__phone" class="input" name="block-edit__phone" value="${data[i].phone}"><br><br>
                    <label for="block-edit__website">website:</label>
                    <input type="text" id="block-edit__website" class="input" name="block-edit__website" value="${data[i].website}"><br><br>
                    <label for="block-edit__company">company:</label>
                    <input type="text" id="block-edit__company" class="input" name="block-edit__company" value="${company}"><br><br>
                    <input type="submit" id="saveBtn" value="Save"> 
                </div>
                `;
                document.querySelector('.block').innerHTML = out;

                let saveBtn = document.querySelector('#saveBtn');
                saveBtn.addEventListener('click', saveChange);
                function saveChange() {
                    data[i].name =  document.querySelector('#block-edit__name').value;
                    data[i].username =  document.querySelector('#block-edit__userName').value;
                    data[i].email =  document.querySelector('#block-edit__email').value;
                    data[i].address =  document.querySelector('#block-edit__address').value;
                    data[i].phone =  document.querySelector('#block-edit__phone').value;
                    data[i].website =  document.querySelector('#block-edit__website').value;
                    data[i].company =  document.querySelector('#block-edit__company').value;
                    document.querySelector('.block-item__edit').style.display = 'none';
                    draw();
                    fetch(`https://jsonplaceholder.typicode.com/users/${data[i].id}`, {
                        method: 'PUT',
                        body: JSON.stringify(data[i]),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then (response => {
                            spinner.setAttribute('hidden', '');
                            if (response.ok){
                                return response.json()
                            }
                            return response.json().then ( error => {
                                    let e = new Error('Ошибка');
                                    e.data = error;
                                    throw e;
                            })
                        })
                        .then(json => {
                            console.log(json);
                        })
                }
            }
        }
    }
    draw();
    console.log(data);

})
    .catch( err => console.log(err));

