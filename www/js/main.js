'use strict';

document.getElementById('calcButton').addEventListener('click', e => {
    // 結果表示エリアの初期化
    document.getElementById('result').textContent = '';

    // 入力値の取得
    const addition = parseInt(document.getElementById('addition').value);
    const rate = parseInt(document.getElementById('rate').value);

    // 合計金額
    let amount = 0;
    
    //1年ずつ計算
    for(let i = 1; i <= 10; i++) {
        // 合計金額の計算
        amount += addition;
        amount += parseInt(amount * rate / 100);
        
        // tr要素を生成
        const tr = document.createElement('tr');

        // th要素を生成し，「年」を設定し，tr要素の子要素として最後尾に追加
        const th = document.createElement('th');
        th.textContent = i;
        tr.appendChild(th);
        
        // td要素を生成し，「合計金額」を設定し，tr要素の子要素として最後尾に追加
        const td = document.createElement('td');
        td.textContent = amount;
        tr.appendChild(td);

        // tr要素を，idがresultとなっているtbody要素の子要素として最後尾に追加
        document.getElementById('result').appendChild(tr);
    }
});