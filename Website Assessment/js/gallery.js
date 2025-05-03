var galleryImages = document.getElementById('galleryImages'); 




fetch('json/gallery.json').then(function(response){
    
    response.json().then(function(json){
        
        json.forEach(function(el){
        var container = document.createElement('a');
        container.setAttribute('href', el.url);
        container.setAttribute('target', '_blank');

        container.classList.add('gallery-image-container');

        var image = document.createElement('img'); 

         image.setAttribute('src', el.url); 
         image.setAttribute('title', el.caption); 
         image.setAttribute('alt', el.description); 
                  
         
        container.appendChild(image);
         
         
        var para = document.createElement('p');
        para.innerText = el.caption;
        container.appendChild(para);
        
        galleryImages.appendChild(container);
            
         
         

        })
    })

})    
       