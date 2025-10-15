
# regartm-site (update)

Обновлённая версия лендинга РЕГАРТ-М с SEO-оптимизацией, улучшенной адаптивной версткой и рабочей формой отправки заявок в Telegram через Vercel Serverless Function.

## Структура
```
/index.html
/css/style.css
/js/script.js
/api/sendTelegram.js   # Vercel serverless function
/img/изображение_viber_2025-02-08-20-58-24-428.jpg
```

## Как развернуть на Vercel (рекомендуется)
1. Зарегистрируйтесь / войдите в https://vercel.com
2. Импортируйте репозиторий из GitHub (Connect GitHub → select repo)
3. В настройках проекта на Vercel добавьте Environment Variables:
   - `TELEGRAM_BOT_TOKEN` — токен вашего бота (выдаёт @BotFather)
   - `TELEGRAM_CHAT_ID` — id чата (узнать можно через @userinfobot или отправив сообщение боту)
4. Нажмите Deploy — Vercel автоматически покажет URL вроде `https://regartm-site.vercel.app`
5. Откройте сайт, заполните форму и проверьте, что заявки приходят в Telegram.

## Если вы используете GitHub Pages
- GitHub Pages не поддерживает serverless функции → форма не будет работать.
- Оставьте сайт как статический — пользователи увидят форму, но при отправке будет сообщение с инструкцией развернуть на Vercel.

## Замечания по безопасности
- Никогда не храните `TELEGRAM_BOT_TOKEN` в публичных файлах. Используйте Environment Variables на Vercel.
- Проверьте права доступа к боту и chat id.

## Внесение изменений вручную
- Скопируйте файлы в ваш репозиторий и создайте ветку, затем PR/merge.

