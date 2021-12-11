'use strict'

// 改行コードの指定
const lineBrStr = '\n';

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
    
    const lineBrRegExp = new RegExp(lineBrStr);
    const targetBeforeArr = targetBeforeStr.split(lineBrRegExp);
    const searchRegExp = new RegExp(searchStr, 'g');
    const targetAfterArr = [];
    targetBeforeArr.forEach(oneLine => targetAfterArr.push(oneLine.replace(searchRegExp, replaceStr)));
    const targetAfterStr = targetAfterArr.join(lineBrStr);
    elem['after-text'].value = targetAfterStr;
});
