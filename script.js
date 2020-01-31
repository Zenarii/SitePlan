function onWindowResize() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  let root = document.documentElement;
  if (w < 800) {
    root.style.setProperty('--default-content-width', "95%");
    root.style.setProperty('--link-float', "right");
    root.style.setProperty('--header-display', "inline-block");
  }
  //else a computer
  else {
    root.style.setProperty('--default-content-width', "45em");
    root.style.setProperty('--link-float', "right");
    root.style.setProperty('--header-display', "inline-block");
  }
  console.log("Width:", w,"Height:", h);
}

//check if mobile device
if (/Mobi/.test(navigator.userAgent)) {
    console.log("phone");
}
else {
  console.log("pc");
}

window.addEventListener('resize', onWindowResize);
onWindowResize();