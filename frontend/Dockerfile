FROM node:alpine3.11 as build

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install 
RUN npm install react-scripts@3.4.1 -g
RUN npx browserslist@latest --update-db
COPY . .

ARG CACHEBUST=1 
RUN npm run build
