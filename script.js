document.getElementById('tgForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const message = this.message.value;
  
  // === ВСТАВЬ СВОИ ДАННЫЕ НИЖЕ ===
  const TOKEN = '8488681723:AAGEPZIixoFXCygJBRpG3ANlem_Hxxvi6oQ';
  const CHAT_ID = '1406846320';
  // ===============================

  const text = `Новая заявка с сайта РЕГАРТ-М:%0AИмя: ${name}%0AТелефон: ${phone}%0AСообщение: ${message}`;
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
  
  fetch(url)
    .then(response => {
      if (response.ok) {
        document.querySelector('.success-message').style.display = 'block';
        this.reset();
      } else {
        alert('Ошибка при отправке. Проверьте настройки бота.');
      }
    })
    .catch(error => alert('Ошибка соединения: ' + error));
});
