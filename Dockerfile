FROM node:20-alpine3.17
WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm install

COPY app/index.js ./

EXPOSE 3000
CMD ["node", "index.js"]
