FROM nginx:1.27-alpine
COPY public /usr/share/nginx/html
RUN printf 'server {\n listen 80;\n root /usr/share/nginx/html;\n index index.html;\n location / { try_files $uri $uri.html $uri/ =404; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
