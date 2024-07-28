function showForm() {
    document.querySelector('.initial-login-btn').style.display = 'none';
    document.querySelector('.form-container').style.display = 'flex';
    
    const elements = [
        { selector: '.w1', delay: 500 },
        { selector: '.w2', delay: 1000 },
        { selector: '.w3', delay: 1500 },
        { selector: '.w4', delay: 2000 },
        { selector: '.w5', delay: 2500 },
        { selector: '.w6', delay: 3000 },
        { selector: '.w7', delay: 3500 },
        { selector: '.links', delay: 4000 }
    ];

    elements.forEach((element, index) => {
        setTimeout(() => {
            const el = document.querySelector(element.selector);
            el.style.display = 'flex'; // Make sure the element is visible
            if (index % 2 === 0) {
                el.style.animation = 'slideInLeft 1s forwards';
            } else {
                el.style.animation = 'slideInRight 1s forwards';
            }
        }, element.delay);
    });
}
function success(){
    window.alert("Booking Successful");
    window.location.href = "http://192.168.45.224:5501/htmlfiles/example.html#";
}
