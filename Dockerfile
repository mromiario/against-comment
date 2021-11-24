FROM node:latest
WORKDIR /app
RUN yarn global add pm2 sequelize-cli
COPY ./package.json .
COPY package-lock.json .
RUN yarn install
COPY . .
CMD ["npm", "run", "exec"]