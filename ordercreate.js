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
            const productsContainer = document.getElementById('products-container');
            console.log(productsContainer);
            productsContainer.innerHTML = ''; // Clear previous content

            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                console.log(product);
                productElement = document.createElement('div');
                productElement.className = 'productcards';
                console.log(productElement);
                productElement.innerHTML = `
                    <h3>${product.productname}</h3>
                    <p>Price: ${product.price}</p>
                    <button onclick="addtocart(${JSON.stringify(product)})">Add to Cart</button>
                `;
                productsContainer.appendChild(productElement);
            }
        }
    }
}

function addtocart(fullproductarray) {
    if (fullproductarray === null || fullproductarray === "") {
        sessionStorage.setItem("fullproductarray", fullproductarray);
    }
}