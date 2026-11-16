
(function getAPI() {

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText; //string
            var mawada = JSON.parse(result); //string to json
            console.log(mawada);

            var basket = "";
            for (var i = 0; i < a.length; i++) {

                var cartona = `  <div class="md:col-4 text-center my-5 ">
                                     <img src="${mawada[i].url}" class="w-100 style='height:350px'">
                                     <h4>${mawada[i].title}</h4>
                                     <h6>${ mawada[i].id}</h6>
                                  </div>`;
                basket = basket + cartona;
            }
            document.querySelector(".test").innerHTML = basket;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();
})();