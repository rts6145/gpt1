# Arab Center React Landing Page

واجهة React احترافية للمركز العربي مبنية باستخدام Vite و Framer Motion.

## التشغيل المحلي

```bash
npm install
npm run dev
```

## البناء للنشر

```bash
npm run build
npm run preview
```

## ربط قناة YouTube

افتح الملف:

```txt
src/App.jsx
```

وعدّل هذا الجزء:

```js
const channelConfig = {
  channelName: 'Arab Center Channel',
  channelUrl: 'https://www.youtube.com/@YourChannelHandle',
  featuredVideoId: 'dQw4w9WgXcQ',
};
```

- `channelUrl`: رابط قناة YouTube.
- `featuredVideoId`: رقم الفيديو من الرابط. مثال:
  - رابط الفيديو: `https://www.youtube.com/watch?v=ABC123`
  - رقم الفيديو هو: `ABC123`

## المميزات

- React + Vite
- Framer Motion animations
- Responsive design
- YouTube channel link section
- Featured YouTube video embed
- Arabic RTL layout
