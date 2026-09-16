# Чути — демо лендінг під Google Ads

Навчальний кейс: швидка сторінка на **Astro + Tailwind**, калькулятор «апарат → послуги 0 грн», форма зі згодою, дисклеймер. Це **не** клініка.

## Локально

```bat
cd chuty
npm install
npm run dev
```

http://127.0.0.1:4321/chuty/

## Що всередині

- калькулятор знижки 100% на послуги, якщо обрано апарат
- мобільна верстка, без важких картинок і Google Fonts (PageSpeed)
- галочка згоди на дані
- текст «це реклама / не оферта» в футері
- форма в демо нікуди не шле заявку

Binotel / Klinica / колтрекінг на демо немає: для них потрібен кабінет замовника. Скрипт віджета вставляють в Layout перед `</body>`.

## Деплой Cloudflare Pages

1. Репозиторій на GitHub (цей проєкт).
2. [Cloudflare Pages](https://pages.cloudflare.com) → підключити репо.
3. Build: `npm run build`. Output: `dist`.
4. У `astro.config.mjs` прибрати `base: "/chuty"` і `site`, якщо сайт на власному домені, не на github.io.

GitHub Pages: лишити `base: "/chuty"`, у репо Settings → Pages → GitHub Actions або /dist.
