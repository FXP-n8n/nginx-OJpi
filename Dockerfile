FROM nginx:alpine

# Copy chatbot site files (chatbot.4-eyes.eu)
COPY site /usr/share/nginx/html

# Copy workshop site files (www.4-eyes.eu)
COPY workshops /usr/share/nginx/workshops

# Copy dashboard site files (dashboard.4-eyes.eu)
COPY dashboard /usr/share/nginx/dashboard

# Copy website monitor (dashboard.4-eyes.eu/monitor/)
COPY website-monitor /usr/share/nginx/dashboard/monitor

# Copy ScienceBusiness tracker to html directory (served from dashboard.4-eyes.eu/sciencebusiness.html)
COPY site/sciencebusiness.html /usr/share/nginx/html/sciencebusiness.html

# Copy hardened nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set proper read permissions for nginx user (UID 101 in nginx alpine)
RUN chmod -R 755 /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/workshops \
    && chmod -R 755 /usr/share/nginx/dashboard \
    && chown -R nginx:nginx /usr/share/nginx/

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
