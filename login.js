
let data = {
    email: 'lic1@email.com',
    password: 1234
}

window.onload = async () => {
    let rawResponse = await fetch('https://localhost:5001/Home/Login', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    console.log(content);
}

$.ajax({
    url: 'https://localhost:5001/Home/Login',
    data: JSON.stringify(data),
    type: 'POST',
    dataType: 'json',
    beforeSend: function () {
        console.log('enviando')
    },
    success: function (result) {
        console.log('resultado')
        console.log(result)
    },
    complete: function () {
        console.log("terminado") 
    },
    failure: function (jqXHR, textStatus, errorThrown) {
        alert("Status: " + jqXHR.status + "; Error: " + jqXHR.responseText); // Display error message  
    }
});