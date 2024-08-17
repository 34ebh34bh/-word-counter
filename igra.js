// document.getElementById('countButton').addEventListener('click', function() {
//   const textInput = document.getElementById('textInput').value;
  
//   // Удаляем лишние пробелы и разделяем строку по пробелам
//   const words = textInput.trim().split(/\s+/);
  
//   // Если строка пустая, то количество слов 0
//   const wordCount = words[0] === '' ? 0 : words.length;
  
//   // Отображаем результат
//   document.getElementById('result').textContent = `Количество слов: ${wordCount}`;
// });

document.getElementById('btn').addEventListener('click', function() {
  const text = document.getElementById('text').value;

  const words = text.trim().split(/\s+/);

  const wordCount = words[0] === '' ? 0 : words.length;

  document.getElementById('out').textContent = `Количество слов:  + ${wordCount}`;

});
