function cpu(){
  let url = "https://kakaku.com/pc/cpu/itemlist.aspx?pdf_se=30"; // 取得するページのURL。一度ブラウザで開いて見てみるといいでしょう。
  let response = UrlFetchApp.fetch(url);
  let text = response.getContentText(); // 取得したHTML文字列

  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("Ryzen65");

  let pattern = /<a class="ckitanker">([^<>]*)<\/a>/g
  let match;
  while(match = pattern.exec(text)){
    sheet.appendRow([match[1]]);
  }
}