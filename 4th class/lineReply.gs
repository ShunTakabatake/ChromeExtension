if(event.message.type == 'text'){ // 受信したのが普通のテキストメッセージであるか
        let translatedText = LanguageApp.translate(event.message.text, 'ja', 'en'); // 英訳して
        sheet.appendRow([new Date(), translatedText]); // スプレッドシートに追記
        let contents = {
          replyToken: event.replyToken,
          messages: [{ type: 'text', text:  translatedText }],
        };
        reply(contents); // 下で説明
}