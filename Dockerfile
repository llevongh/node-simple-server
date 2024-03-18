# Node.js version
FROM node:21.7.1

# Working DIR
WORKDIR /app

# Install project dependencies
COPY package*.json ./
RUN npm install

# Copy project
COPY . .

# Expose port
EXPOSE 3000

# Run server
CMD ["node", "."]
