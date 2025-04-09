FROM nginx:alpine

# Copy your custom NGINX config
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy your HTML page
COPY dist/ /usr/share/nginx/html/
