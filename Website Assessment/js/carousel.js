var previousButton = document.getElementById('previousButton'); //previous button
var nextButton = document.getElementById('nextButton'); //next button
var carouselImages = document.getElementById('carouselImages'); //images section
var carouselCaptions = document.getElementById('carouselCaptions'); //captions section

//Request the JSON object, then with the response object from the promise
fetch('json/carousel.json').then(function(response){
    //Convert that response object to JSON object
    response.json().then(function(json){
        //Then loop through the JSON object/array
        json.forEach(function(el){

            //Create an image for each array element
         var image = document.createElement('img'); 

         //<img> attitbutes
         image.setAttribute('src', el.url); //source/URL of image
         image.setAttribute('title', el.caption); //title for tooltip
         image.setAttribute('alt', el.description); //alternative text for readers or if image does not load
                  
         //Add the new image to the HTML element marked as carouselImages
         carouselImages.appendChild(image);
        });
        
        //Pass the JSON array to a function which creates the carousel after retrieving the images
        createCarousel(json); 
    });
});

//Function which creates the carousel
function createCarousel(json){
    
    //Count of the images in the carouselImages container
    var imgCounter = carouselImages.childElementCount;
    
    //Position in the carousel
    var currentImg = 1;

    //Width of images calculated from the first image 
    var imgWidth = carouselImages.getElementsByTagName('img')[0].clientWidth;

    //When the 'previous' button is clicked a function is called to move backward in the carousel
    previousButton.addEventListener('click',function(){

        //If the current position is not the first position then decrement
        if(currentImg != 1){
            currentImg = currentImg - 1;

            //Use the 'left' property to move to the previous image
            carouselImages.style.left = imgWidth - (currentImg * imgWidth) + 'px';
        }
        //Change the caption so it matches the image
        carouselCaptions.innerText = json[currentImg - 1].caption;
    });

    //When the 'next' button is clicked a function is called to move forward in the carousel
    nextButton.addEventListener('click',function(){

        //If the current position is not the last position then increment
        if(currentImg != imgCounter){
            currentImg = currentImg + 1;

            //Use the 'left' property to move to the previous image
            carouselImages.style.left = imgWidth - (currentImg * imgWidth) + 'px';
        }
        //Change the caption so it matches the image
        carouselCaptions.innerText = json[currentImg - 1].caption;
    });

    carouselCaptions.innerText = json[currentImg -1 ].caption;
}
