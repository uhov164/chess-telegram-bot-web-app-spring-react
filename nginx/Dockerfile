FROM nginx:1.19.8-alpine
ADD /uhov164.ru /etc
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]