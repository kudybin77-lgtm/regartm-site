
/*
  script.js
  - Sends form data to /api/sendTelegram (Vercel function).
  - If deployed on GitHub Pages, it will show a friendly message explaining that form needs backend.
*/
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const toEstimate = document.getElementById('toEstimate');
  if(toEstimate){
    toEstimate.addEventListener('click', function(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); });
  }

  if(!form) return;
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !phone){
      alert('Пожалуйста, укажите имя и телефон.');
      return;
    }

    // Attempt to send to serverless endpoint
    try {
      const res = await fetch('/api/sendTelegram', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({name, phone, message})
      });
      if(res.ok){
        alert('Спасибо! Ваша заявка отправлена.');
        form.reset();
      } else {
        const json = await res.json().catch(()=>({}));
        alert('Ошибка при отправке: ' + (json.error || 'Попробуйте позже.'));
      }
    } catch (err){
      console.error(err);
      alert('Не удалось отправить заявку. Сайт, возможно, запущен без бэкенда (GitHub Pages). Для рабочих отправок задеплойте на Vercel и добавьте переменные окружения TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.');
    }
  });
});
