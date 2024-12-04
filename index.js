var images = ["https://www.google.com/imgres?q=dark%20background&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fturquoise-black-abstract-artistic-texture_707519-20543.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdark-background&docid=FWqzvvZYvw3ugM&tbnid=f4Jrl5NfNYuzwM&vet=12ahUKEwia2IyRooaKAxV6RaQEHXoyDXkQM3oECB0QAA..i&w=626&h=417&hcb=2&ved=2ahUKEwia2IyRooaKAxV6RaQEHXoyDXkQM3oECB0QAA", "https://www.google.com/imgres?q=dark%20background&imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F306%2F908%2F890%2Fspots-background-light-dark-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Fspots-background-light-dark-backgrounds-abstract-glowing-wallpaper-hcoy&docid=c-Wb439-3vNIiM&tbnid=BfdTQEuTxMjY7M&vet=12ahUKEwia2IyRooaKAxV6RaQEHXoyDXkQM3oECGsQAA..i&w=728&h=455&hcb=2&ved=2ahUKEwia2IyRooaKAxV6RaQEHXoyDXkQM3oECGsQAA", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreebackground%2Ftexture-with-an-abstract-and-mysterious-dark-background_15273548.html&psig=AOvVaw026hLudbLGkjnhOs6NGogy&ust=1733132051606000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDJkbeihooDFQAAAAAdAAAAABAJ"];
var currentIndex = 0;
var currentIndex = 0;

function next() {
  var currentImg = document.getElementById("image");
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.src = images[currentIndex];
}

function previous() {
  var currentImg = document.getElementById("image");
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  currentImg.src = images[currentIndex];
}