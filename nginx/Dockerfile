FROM nginx:stable-alpine

RUN mkdir -p -m 755 /usr/share/nginx/html/.well-known && \
    mkdir -m 755 /usr/share/nginx/html/robots && \
    rm /usr/share/nginx/html/index.html

COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/nginx-ip-restrictions.conf /etc/nginx/conf.d/nginx-ip-restrictions.conf
COPY ./ads.txt /usr/share/nginx/html/ads.txt
COPY ./robots.txt /usr/share/nginx/html/robots/robots.txt

# CMD ["nginx", "-g", "daemon off;"]
