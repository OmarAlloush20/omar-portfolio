# Omar Alloush — Developer Portfolio

A responsive one-page portfolio for Omar Alloush, a Computer Engineering graduate and full-stack developer. The site presents his technical background, core skills, flagship Voltiva project, selected engineering decisions, education, languages, and contact details.

## Stack

- React 19
- TypeScript
- Vite
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Presentation

The portfolio uses Omar's graduation portrait and real Voltiva customer, admin, and Android screenshots. On wider screens, the Voltiva surfaces progress through a sticky scroll-led showcase; mobile uses a straightforward stacked presentation. Lightweight native browser observers handle reveal effects and respect reduced-motion preferences without an animation dependency.

The Android APK action uses the stable GitHub `releases/latest` URL configured in `src/data/portfolio.ts`.

## Languages

The interface supports English, Arabic, and Turkish through a typed, centralized copy layer in `src/i18n/translations.ts`. English is the default, the selected language is stored locally, and Arabic switches the document to an intentional RTL layout while preserving readable technical terms and Latin identifiers.
