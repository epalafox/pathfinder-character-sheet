FROM node:12 as builder

COPY ["package.json", "package-lock.json", "/usr/src/build/"]

WORKDIR /usr/src/build

RUN yarn install

COPY . .

RUN yarn build

FROM node:12

COPY ["package.json", "package-lock.json", "/usr/src/app/"]

WORKDIR /usr/src/app

RUN yarn install --only=production

COPY --from=builder ["/usr/src/build/build/", "/usr/src/app/"]

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s -p 3000"]