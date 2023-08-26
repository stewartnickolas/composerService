
FROM node:16-alpine

RUN apk add openssh
RUN apk add git

ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/*
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# Bundle app source
COPY . ./

# confirm installation of node
RUN node -v
RUN npm -v
# install modules
RUN npm install

EXPOSE 8090

CMD npm run start
