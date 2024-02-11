# Use the official Nginx image as base
FROM nginx:latest

# Copy your custom HTML file to the Nginx HTML directory
COPY index.html /usr/share/nginx/html
COPY images/ /usr/share/nginx/html/images/

# Expose port 80
EXPOSE 80