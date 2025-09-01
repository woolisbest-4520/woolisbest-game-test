// ゲームポータル全体で使う共通ロジック（ゲーム遷移やダイアログなど）
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        alert('ゲームが始まります！');
    }
});
