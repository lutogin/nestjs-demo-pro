FROM node:12.16.1-alpine
EXPOSE 3000

WORKDIR /home/app

COPY . /home/app

RUN yarn install

CMD ["yarn", "start:dev"]
