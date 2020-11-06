const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + 'px';
        imgContent[i].style.top = e.pageY + 'px';
    }
};

document.addEventListener('mousemove', showImgContent);

/* tableau dashboard embed: */
var divElement = document.getElementById('db'); 
var vizElement = divElement.getElementsByTagName('object')[0]; 
if (divElement.offsetWidth > 800) { 
    vizElement.style.width = '1000px'; 
    vizElement.style.height = '800px'; 
    } 
else if (divElement.offsetWidth > 500) { 
    vizElement.style.width = '1000px'; 
    vizElement.style.height = '800px'; 
    } 
else { 
    vizElement.style.width = '100%'; 
    vizElement.style.height = '1400px'; 
    } 
var scriptElement = document.createElement('script'); 
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
vizElement.parentNode.insertBefore(scriptElement, vizElement); 