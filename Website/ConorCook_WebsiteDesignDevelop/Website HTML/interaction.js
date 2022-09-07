let slideIndex = 0;
showSlides(slideIndex);
updateSlides();
var blogSubmit = document.getElementById("submitbtnB");

function updateSlides(){
    setTimeout(updateSlides, 6000);
    if(slideIndex == 2){
        slideIndex = 0;
    }
    else{
        slideIndex++;
    }
    showSlides(slideIndex);
    console.log("hit");
}

function fbBtn(){
    window.open("https://www.facebook.com/SnowDennLodge/", "_blank");
}

function plusSlides(n){
    if(slideIndex == 2 && n > 0){
        slideIndex = 0;
    }
    else if(slideIndex == 0 && n < 0){
        slideIndex = 2;
    }
    else{
        slideIndex += n;
    }
    showSlides(slideIndex);
}


function showSlides(n, style) {
    console.log(n)
    if(n == 3){
        n = 0;
    }
    if(n == -1){
        n = 2;
    }
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    slides[n].style.display = "block";
    console.log(slides.length);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        console.log(slides[i]);
    }  
    for (let i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
        slides[slideIndex].style.display = "block";  
    }
    //dots[slideIndex-1].className += " active";
}


function submitPopUp() {
    alert('You will now recieve blog posts in your email')
}

function reviewPopUp() {
    alert('Thank you for your review')
}

function bookPopUp() {
    alert("Your holiday getaway has sucessfully been booked. We look forward to seeing you soon")
}

// cin.ignore();
// getline(cin, var);