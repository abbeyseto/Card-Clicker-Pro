'use strict';

let images = [
    { name: 'Cuttie Kush', url: 'cat.jpg', clicks: 0 },
    { name: 'Jasmine', url: 'cat2.jpg', clicks: 0 },
    { name: 'Poppings', url: 'cat3.jpg', clicks: 0 },
    { name: 'Lateefah', url: 'cat4.jpg', clicks: 0 },
    { name: 'Cushy', url: 'cat5.jpg', clicks: 0 },
    { name: 'Meaowry', url: 'cat6.jpg', clicks: 0 }
];

let selected;

let cardList = '<ul type="none">' + images.map(image => `<li class="card-text">${image.name}</li>`).join('') + '</ul>';

$('#content').append(cardList);

$('li').click('li', function (e, item) {
    selected = this.innerText;
    //console.log(selected);
    e.preventDefault();
    for (var items in images) {
        if (selected === images[items].name) {
            let cardElem = '<div class="card-body"><h4 class="noOfClicks">' + images[items].clicks + '</h4><p class="card-text">' + images[items].name + '</p><div class="card"><img class="card-img-top" src="' + images[items].url + '" alt="cat image"></div></div>';
            $('#display').html(cardElem);

            $('#catName').val(images[items].name);
            $('#catURL').val(images[items].url);
            $('#catClicks').val(images[items].clicks);
        }
    }

    $('.card-img-top').click('.card-img-top', function (e) {
        for (var items in images) {
            let chosen = $(this).attr("src");
            if (chosen === images[items].url) {
                //console.log(chosen);
                let click = ++images[items].clicks;
                $(this).parent().prev().prev().html(click);
                $('#catClicks').val(click);
            }
        }
    });
    $('.btn-success').click('.btn-success', function () {
        updateCat();
    });
    return selected;
});

$('.form-group').hide();

$(".admin, .btn-danger").click('.admin, .btn-danger', function () {
    console.log('Admin toggled');
    $('.form-group').toggle();
});


function updateCat() {
    for (var items in images) {
        if (selected === images[items].name) {
            images[items].name = $('#catName').val();
            images[items].url = $('#catURL').val();
            images[items].clicks = $('#catClicks').val();
            $('.noOfClicks').html($('#catClicks').val());
            $('.card-img-top').attr("src", $('#catURL').val());
            let names = document.getElementsByTagName('li');
            let name = [...names];
            for (var i in name) {
                if (name[i].innerText === selected) {
                    selected = $('#catName').val();
                    name[i].innerText = $('#catName').val();
                    console.log('updated', selected);
                    $('.form-group').hide();
                }
            }
        }
    }
}