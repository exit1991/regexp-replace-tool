'use strict'

// 要素の取得
const elem = {
     'before-text':         document.querySelector('#before-text')
    ,'search-text':         document.querySelector('#search-text')
    ,'replace-text':        document.querySelector('#replace-text')
    ,'searched-text':       document.querySelector('#searched-text')
    ,'after-text':          document.querySelector('#after-text')
    ,'exec-search-button':  document.querySelector('#exec-search-button')
    ,'exec-replace-button': document.querySelector('#exec-replace-button')
    ,'result-clear-button': document.querySelector('#result-clear-button')
}

// 検索ボタンがクリックした際の処理
elem['exec-search-button'].addEventListener('click', () => {
    // 入力値の取得
    const targetBeforeStr = elem['before-text'].value;
    const searchStr = '(' + elem['search-text'].value + ')';
    const replaceStr = '<mark>$1</mark>';
    
    // RegExp 第2引数  g : 同じ行で2回以上ヒットさせる
    //                 m : 複数行で、それぞれの行に対してヒットさせる
    const searchRegExp = new RegExp(searchStr, 'gm');
    const targetAfterStr = targetBeforeStr.replace(searchRegExp, replaceStr);
    
    // 検索後のセット
    elem['searched-text'].innerHTML = targetAfterStr.replaceAll('\n','<BR>');
    console.log(targetAfterStr);
});

// 実行ボタンがクリックした際の処理
elem['exec-replace-button'].addEventListener('click', () => {
    // 入力値の取得
    const targetBeforeStr = elem['before-text'].value;
    const searchStr = elem['search-text'].value;
    const replaceStr = elem['replace-text'].value;
    
    // RegExp 第2引数  g : 同じ行で2回以上ヒットさせる
    //                 m : 複数行で、それぞれの行に対してヒットさせる
    const searchRegExp = new RegExp(searchStr, 'gm');
    const targetAfterStr = targetBeforeStr.replace(searchRegExp, replaceStr);
    
    // 置換後のセット
    elem['after-text'].value = targetAfterStr;
});

// 結果クリアボタンがクリックした際の処理
elem['result-clear-button'].addEventListener('click', () => {
    elem['searched-text'].innerHTML = '';
    elem['after-text'].value = '';
});
