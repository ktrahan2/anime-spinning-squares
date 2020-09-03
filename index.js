anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 800},
        {value: 0, duration: 800}
    ],
    rotateY: {
        value: '1turn',
        easing: 'easeInOutSine'
    }, 
    delay: function(el, i, l) { return i * 1000},
    autoplay: true,
    loop:true,
    
})

const number = document.querySelector('#number') 

anime({
    targets: number,
    innerHTML: [3, 3.55],
    easing: 'linear',
    round: 1000,
    delay: 1000,
})

anime({
    targets: 'div.arrow',
    translateY: [
        {value: 200, duration: 800},
        {value: 0, duration: 800}
    ],
    rotateX: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    autoplay: true,
    loop: true,
    delay: function(el, i, l) { return i * 1000},
})


