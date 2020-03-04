document.getElementById('shopingForm').addEventListener('submit', saveItem);

function saveItem(e) {
    var shopingItemInput = document.getElementById('shopingItem').value;
    // localStorage.setItem("lastname", "Smith");
    // Setting local storage
    var shopingItems = JSON.parse(localStorage.getItem('shopingItems'));
    var i = 1;

    shopingItems.forEach(element => {
        i++
    });

    var shopingItem = {
        id: i,
        name: shopingItemInput
    }

    // Testing if shopping items are their
    if(localStorage.getItem('shopingItems') === null) {
         
        var shopingItems = [];


        shopingItems.push(shopingItem);

        localStorage.setItem('shopingItems', JSON.stringify(shopingItems));
    } else {
        var shopingItems = JSON.parse(localStorage.getItem('shopingItems'));

        shopingItems.push(shopingItem);

        localStorage.setItem('shopingItems', JSON.stringify(shopingItems));
    }
    fetchListItems();
    e.preventDefault();
}

function deleteListItem(id) {
    var shopingItems = JSON.parse(localStorage.getItem('shopingItems'));
    id = parseInt(id);
    for (let i = 0; i < shopingItems.length; i++) {
        if (shopingItems[i].id === id) {
            shopingItems.splice(i, 1);
        }
        
    }
    localStorage.setItem('shopingItems', JSON.stringify(shopingItems));

    fetchListItems();
}

function fetchListItems() {
    var shopingItems = JSON.parse(localStorage.getItem('shopingItems'));

    var listArea = document.getElementById('listArea');

    listArea.innerHTML = '';

    for (let i = 0; i < shopingItems.length; i++) {
        var name = shopingItems[i].name;
        var id = shopingItems[i].id;
        
        listArea.innerHTML += `
        <ul>
           <h3> <li class=''>${id}: ${name}  </li> </h3><a class='btn btn-danger btn-l' href="#" onclick="deleteListItem('${id}')"> Delete </a>
        </ul>
        
        `
    }

    
        
}