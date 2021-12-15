'use strict'

// 要素の取得
const elem = {
     'before-text':         document.querySelector('#before-text')
    ,'search-text':         document.querySelector('#search-text')
    ,'replace-text':        document.querySelector('#replace-text')
    ,'search-results':      document.querySelector('#search-results')
    ,'replace-results':     document.querySelector('#replace-results')
    ,'exec-search-button':  document.querySelector('#exec-search-button')
    ,'exec-replace-button': document.querySelector('#exec-replace-button')
    ,'result-clear-button': document.querySelector('#result-clear-button')
}

// 検索ボタンがクリックした際の処理
elem['exec-search-button'].addEventListener('click', () => {
    // 二段階置換用ダミー文字
    const hitStartStr = '###＞###';
    const hitEndStr = '###＜###';
    
    // ハイライトのための置換1
    // 検索結果の前後を ダミー文字 で囲む
    let targetBeforeStr = elem['before-text'].value;
    let searchStr = '(' + elem['search-text'].value + ')';
    let replaceStr = hitStartStr + '$1' + hitEndStr;
    
    // g:同じ行で2回以上ヒット m:複数行の使用を許可
    let searchRegExp = new RegExp(searchStr, 'gm');
    let targetAfterStr = targetBeforeStr.replace(searchRegExp, replaceStr);
    elem['search-results'].innerText = targetAfterStr;
    
    // ハイライトのための置換2
    // ダミー文字を mark要素 に置き換える
    targetBeforeStr = elem['search-results'].innerHTML;
    searchStr = hitStartStr + '(.*?)' + hitEndStr;
    replaceStr = '<mark>$1</mark>';
    searchRegExp = new RegExp(searchStr, 'gm');
    targetAfterStr = targetBeforeStr.replace(searchRegExp, replaceStr);
    elem['search-results'].innerHTML = targetAfterStr;
});

// 実行ボタンがクリックした際の処理
elem['exec-replace-button'].addEventListener('click', () => {
    // 入力値の取得
    const targetBeforeStr = elem['before-text'].value;
    const searchStr = elem['search-text'].value;
    const replaceStr = elem['replace-text'].value;
    
    // g:同じ行で2回以上ヒット m:複数行の使用を許可
    const searchRegExp = new RegExp(searchStr, 'gm');
    const targetAfterStr = targetBeforeStr.replace(searchRegExp, replaceStr);
    
    // 置換後のセット
    elem['replace-results'].value = targetAfterStr;
});

// 結果クリアボタンがクリックした際の処理
elem['result-clear-button'].addEventListener('click', () => {
    elem['search-results'].innerHTML = '';
    elem['replace-results'].value = '';
});
