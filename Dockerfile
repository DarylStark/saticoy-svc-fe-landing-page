FROM nginx AS base

# Copy the compiled React app to the Nginx server
COPY dist /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]