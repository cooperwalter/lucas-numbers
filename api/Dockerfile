FROM node:16-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]