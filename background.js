chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FETCH_LYRICS") {
    const { artist, title } = request;
    
    // 歌詞を取得するAPI呼び出し
    fetch(`https://lyrics-api-example.com/api/lyrics?artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`)
      .then(response => response.json())
      .then(data => {
        sendResponse({ ok: true, data });
      })
      .catch(error => {
        console.error("Lyrics fetch error:", error);
        sendResponse({ ok: false, error: error.message });
      });
    
    return true; // 非同期レスポンスのため
  }
});
