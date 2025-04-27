
document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.getElementById('conv');
  myButton.addEventListener('click', () => {
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs && tabs.length > 0) {
    const currentUrl = tabs[0].url;
    var urlarr = currentUrl.split("/");
    var vid = urlarr[urlarr.length - 1];
    var nw = "https://youtube.com/watch?v=" + vid
        chrome.tabs.update(tabs[0].id, { url: nw });
   

  } else {
    alert('No active tab found.');
  }});
})});
