// Functions common to all pages defined below

var global_username = localStorage.getItem("global_username") || "Guest";

function setglobalusername(username) {
    global_username = username;
    localStorage.setItem("global_username", username);
}

function fetchglobalusername() {
    document.getElementsByClassName("welcome-message")[0].innerHTML = global_username;
}

// Customer's Page Functions defined below

function customerinsert() {
    const xhttp = new XMLHttpRequest();
    linkcusinsert=`https://oracleapex.com/ords/faizan05/hr/faizancus/`;
    xhttp.onload = function() {
        document.getElementsByClassName("cusinsertsuccesscheck").innerHTML = this.responseText;
    }
    xhttp.open("POST", linkcusinsert, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let stringscusindata = "customerid=" + document.getElementById("i1").value + "&customername=" + document.getElementById("i2").value + "&contactname=" + document.getElementById("i3").value + "&address=" + document.getElementById("i4").value + "&city=" + document.getElementById("i5").value + "&postalcode=" + document.getElementById("i6").value + "&country=" + document.getElementById("i7").value + "&username=" + global_username;
    console.log(stringscusindata);
    console.log(document.getElementById("i1").value);
    console.log(document.getElementById("i2").value);
    console.log(document.getElementById("i3").value);
    console.log(document.getElementById("i4").value);
    console.log(document.getElementById("i5").value);
    console.log(document.getElementById("i6").value);
    console.log(document.getElementById("i7").value);
    xhttp.send(stringscusindata);
}
function customercheck() {
    const xhttp = new XMLHttpRequest();
    linkcuscheckview = `https://oracleapex.com/ords/faizan05/hr/faizancustomers/${document.getElementById("i8").value}`;
    console.log(document.getElementById("i8").value);
    xhttp.open("GET", linkcuscheckview, true);
    xhttp.send();
    xhttp.onload = ()=> {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.response);
            console.log(response);
            document.getElementById("customersdetails").innerHTML = `
                    <h3>Customer Details</h3>
                    <p><b>Customer ID:</b> ${response.customerid}</p>
                    <p><b>Customer Name:</b> ${response.customername}</p>
                    <p><b>Contact Name:</b> ${response.contactname}</p>
                    <p><b>Address:</b> ${response.address}</p>
                    <p><b>City:</b> ${response.city}</p>
                    <p><b>Postal Code:</b> ${response.postalcode}</p>
                    <p><b>Country:</b> ${response.country}</p>
                `;
        }
        else {
            // Handle Error
        }
    }

}

// Shipper's Page Functions defined below

function shipperinsert(){
    const xhttp = new XMLHttpRequest();
    linkshipinsert=`https://oracleapex.com/ords/faizan05/hr/faizanship/`;
    xhttp.onload = function() {
        document.getElementsByClassName("shipinsertsuccesscheck").innerHTML = this.responseText;
    }
    xhttp.open("POST", linkshipinsert, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let stringsshipindata = "shipperid=" + document.getElementById("i1").value + "&shippername=" + document.getElementById("i2").value + "&phone=" + document.getElementById("i3").value + "&username=" + global_username;
    console.log(stringsshipindata);
    console.log(document.getElementById("i1").value);
    console.log(document.getElementById("i2").value);
    console.log(document.getElementById("i3").value);
    xhttp.send(stringsshipindata);

}
function shippercheck(){
    const xhttp = new XMLHttpRequest();
    linkshipcheckview = `https://oracleapex.com/ords/faizan05/hr/faizanshippers/${document.getElementById("i4").value}`;
    console.log(linkshipcheckview);
    xhttp.open("GET", linkshipcheckview, true);
    xhttp.send();
    xhttp.onload = ()=> {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.response);
            console.log(response);
            document.getElementById("shippersdetails").innerHTML = `
                    <h3>Shipper Details</h3>
                    <p><b>Shipper ID:</b> ${response.shipperid}</p>
                    <p><b>Name:</b> ${response.shippername}</p>
                    <p><b>Phone:</b> ${response.phone}</p>
                `;
        }
        else {
            // Handle error
        }
    }

}

// Supplier's Page Functions defined below
function supplierinsert() {
    const xhttp = new XMLHttpRequest();
    linksupinsert=`https://oracleapex.com/ords/faizan05/hr/faizansup/`;
    xhttp.onload = function() {
        document.getElementsByClassName("supinsertsuccesscheck").innerHTML = this.responseText;
    }
    xhttp.open("POST", linksupinsert, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let stringssupindata = "supplierid=" + document.getElementById("i1").value + "&suppliername=" + document.getElementById("i2").value + "&contactname=" + document.getElementById("i3").value + "&address=" + document.getElementById("i4").value + "&city=" + document.getElementById("i5").value + "&postalcode=" + document.getElementById("i6").value + "&country=" + document.getElementById("i7").value + "&phone=" + document.getElementById("i8").value;
    console.log(stringssupindata);
    console.log(document.getElementById("i1").value);
    console.log(document.getElementById("i2").value);
    console.log(document.getElementById("i3").value);
    console.log(document.getElementById("i4").value);
    console.log(document.getElementById("i5").value);
    console.log(document.getElementById("i6").value);
    console.log(document.getElementById("i7").value);
    console.log(document.getElementById("i8").value);
    xhttp.send(stringssupindata);
}

function suppliercheck(){
    const xhttp = new XMLHttpRequest();
    linksupcheckview = `https://oracleapex.com/ords/faizan05/hr/faizansuppliers/${document.getElementById("i9").value}`;
    console.log(linksupcheckview);
    xhttp.open("GET", linksupcheckview, true);
    xhttp.send();
    xhttp.onload = ()=> {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.response);
            console.log(response);
            document.getElementById("suppliersdetails").innerHTML = `
                    <h3>Supplier Details</h3>
                    <p><b>Supplier ID:</b> ${response.supplierid}</p>
                    <p><b>Name:</b> ${response.suppliername}</p>
                    <p><b>Contact Name:</b> ${response.contactname}</p>
                    <p><b>Phone:</b> ${response.phone}</p>
                    <p><b>Postalcode:</b> ${response.postalcode}</p>
                    <p><b>Address:</b> ${response.address}</p>
                    <p><b>City:</b> ${response.city}</p>
                    <p><b>Country:</b> ${response.country}</p>
                `;
        }
        else {
            // Handle error
        }
    };
}

// Employee's Page Functions defined below

function myfunction(){
    alert("New Employee Added Successfully!");
}

function employeeinsert() {
    const xhttp = new XMLHttpRequest();
    linkempinsert=`https://oracleapex.com/ords/faizan05/hr/faizanemp/`;
    xhttp.onload = function() {
        document.getElementsByClassName("empinsertsuccesscheck").innerHTML = this.responseText;
    }
    xhttp.open("POST", linkempinsert, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let stringsempindata = "employeeid=" + document.getElementById("i1").value + "&firstname=" + document.getElementById("i2").value + "&lastname=" + document.getElementById("i3").value + "&birthdate=" + document.getElementById("i4").value + "&photo=" + document.getElementById("i5").value + "&notes=" + document.getElementById("i6").value +"&username=" + global_username;
    console.log(stringsempindata);
    console.log(document.getElementById("i1").value);
    console.log(document.getElementById("i2").value);
    console.log(document.getElementById("i3").value);
    console.log(document.getElementById("i4").value);
    console.log(document.getElementById("i5").value);
    console.log(document.getElementById("i6").value);
    xhttp.send(stringsempindata);
}

function employeecheck(){
    const xhttp = new XMLHttpRequest();
    linkempcheckview = `https://oracleapex.com/ords/faizan05/hr/faizanemployee/${document.getElementById("i7").value}`;
    console.log(linkempcheckview);
    xhttp.open("GET", linkempcheckview, true);
    xhttp.send();
    xhttp.onload = ()=> {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.response).items[0];
            console.log(response);
            document.getElementById("employeesdetails").innerHTML = `
                <h3>Employee Details</h3>
                <p><b>Employee ID:</b> ${response.employeeid}</p>
                <p><b>Name:</b> ${response.firstname} ${response.lastname}</p>
                <p><b>Birthdate:</b> ${response.birthdate}</p>
                <p><b>Photo:</b> ${response.photo}</p>
                <p><b>Notes:</b> ${response.notes}</p>
            `;
            // Process the response data here
        } else {
            // Handle error
        }
    };
    
}

function deleteemployee(){
    const xhttp = new XMLHttpRequest();
    linkdelete = `https://oracleapex.com/ords/faizan05/hr/faizanemployee/${document.getElementById("i9").value}`;
    console.log(linkdelete);
    xhttp.onload = function() {
        if (this.status ===200){
            console.log(this.responseText);
            document.getElementById("empdeletesuccesscheck").innerHTML = this.responseText;
        } else {
            document.getElementById("empdeletesuccesscheck").innerHTML = this.responseText;
            // Handle error
        }

    }
    xhttp.open("POST", linkdelete, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function employeedeleteconfirmation(){
    if (confirm("Are you sure you want to delete this employee?")) {
        deleteemployee();
    } else {
        // User clicked "Cancel", do nothing
    }
}