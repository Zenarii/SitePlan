function onWindowResize() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  let root = document.documentElement;
  if (w < 800) {
    root.style.setProperty('--default-content-width', "95%");
    root.style.setProperty('--link-float', "right");
    root.style.setProperty('--header-display', "inline-block");
  }
  else {
    root.style.setProperty('--default-content-width', "45em");
    root.style.setProperty('--link-float', "right");
    root.style.setProperty('--header-display', "inline-block");
  }
}

//check if mobile device
if (/Mobi/.test(navigator.userAgent)) {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if(page[0]!=="m") {
    //if page is blank then on index.html
    //otherwise is a different webpage
    if(page!=="") {
      window.location.replace("m"+page);
    }
    else{
      window.location.replace("mindex.html");
    }
  }
}
else {
  var path = window.location.pathname;
  var page1 = path.split("/").pop();
  //if on a mobile page redirect to the pc one
  if(page1[0]==="m") {
    var page2 = page1.substr(1);
    window.location.replace(page2);
  }
}

window.addEventListener('resize', onWindowResize);
onWindowResize();