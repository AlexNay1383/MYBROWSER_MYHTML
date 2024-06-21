/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/
function listenForClicks() {

    document.addEventListener("click", (e) => {


        function getscript(name) {
            var fname;
            switch (name) {
                case "UserSelect":
                    fname = "uselect.js";
                    break;
                case "Scroll":
                    fname = "scroll.js";
                    break;
                case "Unblur":
                    fname = "unblur.js";
                    break;
                case "No Overlay":
                    fname = "nooverlay.js";
                    break;
            }
            return "content_scripts/" + fname;
        }

        function myhtmlify(tabs) {
           
            var js = getscript(e.target.textContent);
            browser.tabs.sendMessage(tabs[0].id, {
                command: "MYHTMLify",
                js: js,
            });
        }

        function reportError(error) {
            console.error(`Could not MYHTMLify: ${error}`);
        }

        //Start here

        if (e.target.tagName !== "BUTTON" || !e.target.closest("#choises")) {
            // Ignore when click is not on a button within <div id="popup-content">.
            return;
        }

        browser.tabs
            .query({ active: true, currentWindow: true })
            .then(myhtmlify)
            .catch(reportError);
    });
}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
    console.error(`Failed to yell MY BROWSER MY HTML: ${error.message}`);
}

/**
* When the popup loads, inject a content script into the active tab,
* and add a click handler.
* If we couldn't inject the script, handle the error.
*/


browser.tabs
    .executeScript({ file: "../content_scripts/exec.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
