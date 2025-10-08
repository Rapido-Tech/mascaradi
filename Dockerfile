FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies (include dev dependencies)
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build the Next.js app (or any build step)
RUN npm run build

# Production image
FROM node:20-alpine

WORKDIR /app

# Copy the application code from the builder stage
COPY --from=builder /app ./

# Install all dependencies, including dev dependencies (do not omit dev)
RUN npm install

EXPOSE 3000

# Run the application in development mode
CMD ["npm", "run", "dev", "--", "--port", "3000", "--host"]
