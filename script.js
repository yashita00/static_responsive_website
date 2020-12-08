let featured = document.getElementById('featured');
let onSale = document.getElementById('on-sale');
let bestRated = document.getElementById('best-rated');
let featuredTxt = document.getElementById('featured-txt');
let onSaleTxt = document.getElementById('on-sale-txt');
let bestRatedTxt = document.getElementById('best-rated-txt');
let featuredProducts = document.querySelector('.featured-products');
let productListingCont1 = document.querySelector('#product-listing-cont1');
let onSaleProducts = document.querySelector('.on-sale-products');
let colored = '#E15356'

featured.addEventListener('click', () => {
    onSaleTxt.style.color = 'gray';
    bestRatedTxt.style.color = 'gray';
    featuredTxt.style.color = colored;
});

onSale.addEventListener('click', () => {
    featuredTxt.style.color = 'gray';
    bestRatedTxt.style.color = 'gray';
    onSaleTxt.style.color = colored;
});

bestRated.addEventListener('click', () => {
    featuredTxt.style.color = 'gray';
    bestRatedTxt.style.color = colored;
    onSaleTxt.style.color = 'gray';
});

$(document).ready(function () {
    $('#div-trending-products').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        autoplaySpeed: 2000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('#product-listing-cont1').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        autoplaySpeed: 2000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#product-listing-cont2').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        autoplaySpeed: 2000,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});