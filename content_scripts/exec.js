function runscript(js) {
  try {
    const script = document.createElement('script');
    script.src = "../" + js;
    document.body.appendChild(script);
  } catch (error) {
    console.log(error);
  }
}

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "MYHTMLify") {
    runscript(message.js);
  }
});
