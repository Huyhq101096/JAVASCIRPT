
fetch('https://gnews.io/api/v4/top-headlines?&token=97448f63392c9291dad92854c64725e3')
    .then(response => response.json()) // transform the data into json
    .then(function (data) {
        for (var i = 0; i < data.articles.length; i++) {
            var output = document.getElementById('output');
            output.innerHTML +=
                `<div class='container divbot'>
                    <div class='col-md-4'><img src='${data.articles[i].image}' alt=''></div>
                    <div class='col-md-8'>
                        <h4><a href='${data.articles[i].url}' target='_blank'>${data.articles[i].title}</a></h4>
                        <br>
                        <p>${data.articles[i].publishedAt}</p><br>
                        <p>${data.articles[i].title}</p>
                    </div>
                </div> `;           
        }              
    })

    // get btnmodal.
    var modals = document.getElementById('btnmodal');

    // get showmodal
    var showmodal = document.getElementById('myModal');

    // get close modal.
    var closemodal = document.getElementsByClassName('close')[0];

    modals.onclick = function() {
        showmodal.style.display = 'block';
    }

    closemodal.onclick = function() {
        showmodal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == showmodal) {
            showmodal.style.display = 'none';
        }
    }

    function search() {
        var txtSearch = document.getElementById('txtSearch').value;
        document.getElementById('output').innerHTML = '';

        fetch('https://gnews.io/api/v4/search?q=' + txtSearch + '&token=97448f63392c9291dad92854c64725e3')
        .then(response => response.json()) // transform the data into json
        .then(function (data) {
        for (var i = 0; i < data.articles.length; i++) {
            var output = document.getElementById('output');
            output.innerHTML +=
                `<div class='container divbot'>
                    <div class='col-md-4'><img src='${data.articles[i].image}' alt=''></div>
                    <div class='col-md-8'>
                        <h4><a href='${data.articles[i].url}' target='_blank'>${data.articles[i].title}</a></h4>
                        <br>
                        <p>${data.articles[i].publishedAt}</p><br>
                        <p>${data.articles[i].title}</p>
                    </div>
                </div> `;           
            }              
        })
        var closemodal = document.getElementById('myModal');
        closemodal.style.display = 'none';
    }










