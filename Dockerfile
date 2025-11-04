FROM nginx:alpine

# Copy site files
COPY site /usr/share/nginx/html

# Copy hardened nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
