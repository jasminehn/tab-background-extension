/*window.onload=function(){
    const imgInput = document.getElementById("upload-image-input");
    const imgButton = document.getElementById("upload-image-button");
    
    imgButton.addEventListener("click", function() {
        console.log("yeet prime");
        imgInput.click();
        console.log("yeet");
    });
}*/

const imgInput = document.getElementById("upload-image-input");
const imgButton = document.getElementById("upload-image-button");

imgButton.addEventListener("click", function() {
    imgInput.click();
});

imgInput.addEventListener("change", function() {
    if(imgInput.value) {
        //change bg to selected image
        console.log(imgInput.value);
        //document.body.style.backgroundImage ="\"url("+imgInput.value+ ")\"";
        var url = URL.createObjectURL(this.files[0]);
        document.body.style.background = "url(" + url + ") no-repeat";
        console.log("yay");
    }else {
        alert("no file chosen!");
    }
});