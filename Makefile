.PHONY: dev build preview test test-ui install lint lint-fix format

# РАЗРАБОТКА И СБОРКА

# Запуск проекта в режиме разработки (локальный сервер Vue)
dev:
	npm run dev

# Сборка проекта для продакшна (компиляция кода)
build:
	npm run build

# Локальный запуск уже собранного проекта из папки dist
preview:
	npm run preview

# Быстрая установка всех зависимостей проекта (node_modules)
install:
	npm install


# ТЕСТИРОВАНИЕ (PLAYWRIGHT)

# Запуск всех тестов Playwright в консоли
test:
	npx playwright test

# Запуск тестов Playwright в красивом визуальном UI-интерфейсе
test-ui:
	npx playwright test --ui


# ПРОВЕРКА КОДА И ФОРМАТИРОВАНИЕ

# Найти ошибки в коде и нарушения правил Vue/TypeScript (без исправления)
lint:
	npm run lint

# Автоматически исправить все мелкие ошибки и опечатки в коде
lint-fix:
	npm run lint -- --fix

# Красиво выровнять все отступы, скобки и кавычки во всех файлах проекта (Prettier)
format:
	npx prettier --write .