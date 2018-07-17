FROM ruphin/webserve

COPY . /usr/share/nginx/html
COPY ./node_modules/@webcomponents/webcomponentsjs /usr/share/nginx/html/@webcomponents/webcomponentsjs
