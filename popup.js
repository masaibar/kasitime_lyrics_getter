function getLyrics() {
	chrome.tabs.executeScript(null, {"file": "get_lyrics.js"});
}

document.getElementById("button_copy").onclick = function() {
	getLyrics();
}
