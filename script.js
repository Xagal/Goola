//function to create products for gallery
let imageArr1 = ['images/products/nice shirt woman.PNG', 'images/products/fjall backpack.PNG', 'images/products/brown purse.PNG', 'images/products/glasses on table.PNG', 'images/products/woven bag.PNG', 'images/products/black purse.PNG', 'images/products/glasses generic.PNG', 'images/products/red bag.PNG']
let imageArr2 = ['images/products/louis bag.PNG', 'images/products/red bag.PNG', 'images/products/leatherbag.PNG', 'images/products/louis belt.PNG']
let productDescRow1 = 'Lorem ipsum dolor sit amet'
let productDescRow2 = 'Lorem ipsum'
let descArr = []
descArr.push(productDescRow1)
descArr.push(productDescRow2)



const product = function(arr, arrOfImages, galleryNumber, index) {
    let product = document.createElement('div')
    product.setAttribute('class', 'product-container container')
    let gallery = document.querySelector(`.g${galleryNumber}`)
    gallery.appendChild(product)

    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'image-container container')
    product.appendChild(imageContainer)

    // <polyline points='0,50 5,40 10,70 15,20 16,25 20,85 25,95 30,10 35,0 40,100 45,90 48,0 56,0 60,90 65,100 70,10 75,0 80,75 85,85 90,20 95,60 100,50 52.5,70' stroke-width=".1" stroke-linecap="butt" stroke-linejoin="miter"></polyline>

    let svg = document.createElement('svg')


    let imageWrapper = document.createElement('div')
    imageWrapper.setAttribute('class', 'image-wrapper')
    imageContainer.appendChild(imageWrapper)

    let image = document.createElement('img')
    image.setAttribute('src', arrOfImages[index])
    image.setAttribute('class', 'product-image')
    imageWrapper.appendChild(image)

    let descContainer = document.createElement('div')
    descContainer.setAttribute('class', 'description-container container')
    product.appendChild(descContainer)

    for (let i = 0; i < 2; i++) {
        let productDesc = document.createElement('div')
        productDesc.setAttribute('class', `product-description`)
        descContainer.appendChild(productDesc)
        descContainer.lastChild.innerHTML = arr[i]  
    }
}

for (let i = 0; i < 8; i++) {
    product(descArr, imageArr1, 1, i);
}
for (let i = 0; i < 4; i++) {
    product(descArr, imageArr2, 2, i)
}

$(document).on('scroll', function () {
    $(".goola").css("top", Math.max(100 - .5*window.scrollY, 0) + "px");
    let banner = document.getElementById('banner')
    let bannerHeight = banner.style.height
    temp = bannerHeight.split('')
    temp.pop()
    temp.pop()
    bannerHeight = temp.join('')
    if(bannerHeight < 2) {
        document.getElementById("line").style.opacity = '0'
        document.getElementById("line2").style.opacity = '0'
    } else {
        document.getElementById("line").style.opacity = '1'
        document.getElementById("line2").style.opacity = '1'

    }
    if(window.scrollY < 250) {
        let temp = document.querySelector('.logo-container-nav')
        temp.setAttribute('id', 'not-active')
        temp = document.querySelector('.logo.container')
        temp.setAttribute('id', 'logo-visible')
        temp = document.querySelector('.shop.container')
        temp.setAttribute('id', 'shop-shiftright')

    }
    if(window.scrollY >= 250) {
        let temp = document.querySelector('.logo-container-nav')
        temp.setAttribute('id', 'active')
        temp = document.querySelector('.logo.container')
        temp.setAttribute('id', 'logo-hidden')
        temp = document.querySelector('.shop.container')
        temp.setAttribute('id', 'shop-shiftleft')
    }
})

$(document).on('scroll', function () {
	$("#banner").css("height", Math.max(250 - 1*window.scrollY, 0) + "px");
})