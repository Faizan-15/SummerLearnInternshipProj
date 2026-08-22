var fullproductarray = sessionStorage.getItem("fullproductarray") || "";

function fetchproducts() {
    // Loop through the products array and create HTML elements for each product
    const xhttp = new XMLHttpRequest();
    linkproducts = `https://oracleapex.com/ords/faizan05/hr/faizanpro/`;
    xhttp.open("GET", linkproducts, true);
    xhttp.send();
    xhttp.onload = () => {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.responseText);
            const products = response.items;
            console.log(products);
            const productsContainer = document.getElementById('products-menu');
            console.log(productsContainer);
            productsContainer.innerHTML = `<h1 style="color: white; text-align: center;">Products...</h1>`; // Clear previous content

            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                console.log(product);
                productElement = document.createElement('div');
                productElement.className = 'productcards';
                console.log(productElement);
                productstring = JSON.stringify(product)
                productElement.innerHTML = `
                    <h3>${product.productname}</h3>
                    <p>Price: ${product.price}</p>
                    <button id="pro${product.productid}" onclick="addtocart(${product.productid})">Add to Cart</button>
                `;
                productsContainer.appendChild(productElement);
            }
        }
    }
}

function addtocart(fullproductarraypass) {
    console.log("val="+fullproductarraypass);
    if (fullproductarraypass) {
        cartcontainer=document.getElementById('cart-container');
        cartitembox=document.createElement('div');
        cartitembox.className='cartitembox';
        cartitembox.innerHTML=`
            <img class="smallpic" src="OIPPP.jpg">
            <p>${fullproductarray}</p>
        `
        cartcontainer.appendChild(cartitembox);
        console.log("456");
    }
    else {
        sessionStorage.setItem("fullproductarray", fullproductarraypass);
        console.log("123");
    }
}

function callheader() {
    document.getElementsByClassName("header")[0].innerHTML= `
        <div class="welcome-message"></div>
        <div style="height: auto; width: 60%;"><h1 style="color: white;">Foodpanda POS Portal</h1></div>
        <div style="height: auto; width: 20%;"><a href="login.html" style="color: white;">Logout</a></div>
    `
}