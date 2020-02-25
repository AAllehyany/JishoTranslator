chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "translator_jisho",
        title: "translate with jisho",
        contexts: ["selection"],
        type: "normal",

    });
});

chrome.contextMenus.onClicked.addListener(translate);

function translate(info, tab) {
    let url = 'https://jisho.org/search/' + info.selectionText;
    chrome.tabs.create({url: url, index: tab.index + 1});
}