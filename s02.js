function splitText(text, max) {
  if (text === '') return []; // Boş metin kontrolü

  const result = [];
  let currentPart = '';
  let words = [];
  
  // Metni kelimelere bölelim
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' || i === text.length - 1) {
      words.push(text.slice(start, i + (i === text.length - 1 ? 1 : 0)));
      start = i + 1;
    }
  }
  
  // Kelimeleri belirli uzunlukta parçalara bölelim
  for (let word of words) {
    if (currentPart.length + word.length + (currentPart ? 1 : 0) <= max) {
      // Eğer mevcut parça + kelime + bir boşluk mevcut max uzunluğunu geçmiyorsa
      currentPart += (currentPart ? ' ' : '') + word;
    } else {
      // Mevcut parça limit aşıyorsa, mevcut parçayı sonuç dizisine ekle ve yeni bir parça başlat
      result.push(currentPart);
      currentPart = word;
    }
  }
  
  // Son kalan parçayı da ekle
  if (currentPart) {
    result.push(currentPart);
  }
  
  return result;
}
