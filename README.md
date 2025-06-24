Production Frontend Architecture Template
Модульный, масштабируемый, изолированный проект с кастомной архитектурой на FSD, предназначен для разработки enterprise-grade SPA-приложений.


Технологии и стек
React 17 / TypeScript

Redux Toolkit / AsyncThunk

Feature-Sliced Design (FSD)

Webpack 5 / Babel / SCSS Modules

Storybook / Jest / Cypress / Husky

i18next + JSON server mock



Архитектура
Проект реализует собственную архитектуру на основе FSD-подхода с акцентом на модульность, слабую связанность и горизонтальную масштабируемость.


Быстрый старт

npm install

# локальный сервер
npm run start

# прод сборка
npm run build:prod

# storybook
npm run storybook

# unit тесты
npm run test:unit



Ближайшие доработки
Внедрение полноценной auth-системы (JWT, роли, protected routes)

Механизм feature toggles для A/B тестирования

Интеграция CI/CD (GitHub Actions + docker-based preview)

Разделение runtime/compile-time конфигураций

Поддержка микрофронтов (Module Federation)

Расширение покрытия e2e-тестами (Cypress)
