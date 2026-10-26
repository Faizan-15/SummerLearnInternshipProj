function fetchproducts() {
    const xhttp = new XMLHttpRequest();
    linkproducts = `https://oracleapex.com/ords/faizan05/hr/faizanpro/`;
    xhttp.open("GET", linkproducts, true);
    xhttp.send();
    xhttp.onload = () => {
        if(xhttp.status === 200) {
            const jmlp = JSON.parse(xhttp.response);
            console.log(jmlp.count);
            console.log(jmlp);

            for(let i=0; i < jmlp.count; i++) {
                response = jmlp.items[i];
                console.log(response);
                document.getElementsByClassName("productsunitary")[i].innerHTML = `
                <td><p>${response.productid}</p></td>
                <td><p>${response.productname}</p></td>
                <td><p>${response.suppliername}</p></td>
                <td><p>${response.categoryname}</p></td>
                <td><p>${response.unit}</p></td>
                <td><p>${response.price}</p></td>
                <td><button class="buttonclass" id="${response.productid}" onclick="show()">Show Details</button></td>
                `;
            }
        }
    }
}
function show() {
    const productId = event.target.id;
    const xhttp = new XMLHttpRequest();
    linkproductdetails = `https://oracleapex.com/ords/faizan05/hr/faizanpro/${productId}`;
    console.log(linkproductdetails);
    xhttp.open("GET", linkproductdetails, true);
    xhttp.send();
    xhttp.onload = () => {
        if(xhttp.status === 200) {
            const jmlp = JSON.parse(xhttp.response);
            response = jmlp.items[0];
            console.log(response);
            document.getElementsByClassName("displaycard")[0].innerHTML = `
                <div style="width: 100%; background-color: white; border: 3px solid black; border-radius: 10px; padding: 10px; margin: 10px;">
                    <h3>Product Details</h3>
                    <div style="background-color: white; border-radius: 10px; padding: 5px;">
                        <img src="OIP.webp" alt="Product Image" style="max-height: 130px; border-radius: 10px;">
                    </div>
                    <p><b>Product ID:</b> ${response.productid}</p>
                    <p><b>Product Name:</b> ${response.productname}</p>
                    <p><b>Supplier:</b> ${response.suppliername}</p>
                    <p><b>Category:</b> ${response.categoryname}</p>
                    <p><b>Unit:</b> ${response.unit}</p>
                    <p><b>Price:</b> ${response.price}</p>
                </div>
            `;
        }
    }
}