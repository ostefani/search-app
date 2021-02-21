FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


#EXPOSE 3000

#CMD ["npm","run","dev"]
