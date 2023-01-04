const imgInput = document.getElementById("upload-image-input");
const imgButton = document.getElementById("upload-image-button");
const imageUrl = "";

//if the user clicks the button, "transfer" click to the hidden input
imgButton.addEventListener("click", function() {
    imgInput.click();
});

//change bg to selected image
imgInput.addEventListener("change", function() {
    if(imgInput.value) {
        console.log(imgInput.value);
        var url = URL.createObjectURL(this.files[0]);
        document.body.style.background = "url(" + url + ") no-repeat";
        
        //save selected image in storage (using Chrome Storage API)
        chrome.storage.sync.set({'selectedImage': url}, function() {
            console.log('Selected image saved!');
        });
    }else {
        alert("no file chosen!");
    }
});
/*
//retrieve the user's selected image (using Chrome Storage API)
document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get('selectedImage', function(data) {
        console.log('Selected image: ' + data.selectedImage);
        
        //set the selected image as the background for a new tab (using Chrome Storage API)
        chrome.tabs.insertCSS({
            code: 'body { background-image: url("' + data.selectedImage + '"); }'
        });
    });
});
*/

imgInput.addEventListener("change", function() {
    if (imgInput.value) {
        console.log(imgInput.value);
        var url = URL.createObjectURL(this.files[0]);
        document.body.style.background = `url(${url}) no-repeat`;
        
      // Send a message to the background script to save the selected image in the Chrome Storage API
        chrome.runtime.sendMessage({ action: "saveImage", imageUrl: url }, function() {
            console.log("Selected image saved in Chrome Storage API");
    });
    }else {
        alert("no file chosen!");
    }
});