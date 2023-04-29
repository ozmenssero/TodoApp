FROM node:16

WORKDIR /var/ToDoApp

COPY package*.json ./

RUN npm install
COPY . .
VOLUME ["/var/todoapp"]

EXPOSE 8080

CMD ["npm", "run", "build"]