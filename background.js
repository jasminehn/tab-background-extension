// Listen for the 'onCreated' event, which is fired whenever a new tab is created
chrome.tabs.onCreated.addListener(function(tab) {
    // Retrieve the selected image from the Chrome Storage API
    chrome.storage.sync.get('selectedImage', function(data) {
        console.log('Selected image: ' + data.selectedImage);
        
        // Set the selected image as the background for the new tab
        chrome.tabs.insertCSS({
            code: 'body { background-image: url("' + data.selectedImage + '"); }'
        }, function() {
            console.log('Background image set for tab ' + tab.id);
        });
    });
});