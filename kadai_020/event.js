const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () => {
  const parentList = document.getElementById('text');
  parentList.textContent = 'ボタンをクリックしました';
})
