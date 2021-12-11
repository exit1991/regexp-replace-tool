'use strict'

// 要素
const elem = {
     'before-text':         document.querySelector('#before-text')
    ,'search-text':         document.querySelector('#search-text')
    ,'replace-text':        document.querySelector('#replace-text')
    ,'after-text':          document.querySelector('#after-text')
    ,'exec-replace-button': document.querySelector('#exec-replace-button')
    ,'before-text-label':   document.querySelector('#before-text-label')
    ,'search-text-label':   document.querySelector('#search-text-label')
    ,'replace-text-label':  document.querySelector('#replace-text-label')
    ,'after-text-label':    document.querySelector('#after-text-label')
}

// クリックした際の処理
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
