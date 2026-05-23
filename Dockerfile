FROM nginx:alpine

# Copy chatbot site files (chatbot.4-eyes.eu)
COPY site /usr/share/nginx/html

# Copy workshop site files (www.4-eyes.eu)
COPY workshops /usr/share/nginx/workshops

# Copy dashboard site files (dashboard.4-eyes.eu)
COPY dashboard /usr/share/nginx/dashboard

# Copy ScienceBusiness tracker to html directory (served from dashboard.4-eyes.eu/sciencebusiness.html)
COPY site/sciencebusiness.html /usr/share/nginx/html/sciencebusiness.html

# Copy hardened nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
