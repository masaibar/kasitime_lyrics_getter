chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.match(/www.kasi-time.com\/item-[0-9]*\.html$/) != null) {
		//URLが歌詞タイムの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);
	}
});
