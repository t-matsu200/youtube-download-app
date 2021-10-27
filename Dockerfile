FROM node:16
WORKDIR /api
COPY . /api
RUN mkdir -p -m 777 /usr/share/nginx/html/tmp-video && \
    npm install
RUN npm run build
