FROM node:14.15.4 as build
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY ./ /app/
EXPOSE 3000
RUN npm i
CMD ["npm", "run", "start"]
