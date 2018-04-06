document.getElementById('shopingForm').addEventListener('submit', saveItem);

function saveItem(e) {
    var shopingItemInput = document.getElementById('shopingItem').value;
    // localStorage.setItem("lastname", "Smith");
    // Setting local storage

    var shopingItem = {
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

function deleteListItem(name) {
    var shopingItems = JSON.parse(localStorage.getItem('shopingItems'));

    for (let i = 0; i < shopingItems.length; i++) {
        if (shopingItems[i].name === name) {
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
        
        listArea.innerHTML += `
        <ul>
           <h3> <li> ${name}  </li> </h3><a class='btn btn-danger btn-l' href="#" onclick="deleteListItem('${name}')"> Delete </a>
        </ul>
        
        `
    }

    
        
}