FROM node:12

COPY ["package.json", "/usr/src/app/"]

WORKDIR /usr/src/app

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]