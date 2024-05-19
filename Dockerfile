FROM node:20.11.1-alpine3.19
WORKDIR /app

RUN apk add git && cd /app && git init


# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .
ARG ENV_ARG=$ENV_ARG
RUN echo -e "$ENV_ARG" >> ./.env

# Собираем приложение
RUN npm run build

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

# Запускаем приложение при старте контейнера
CMD ["npm", "start"]
