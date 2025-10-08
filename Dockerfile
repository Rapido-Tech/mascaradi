FROM node:20-alpine as builder

# Accept build-time environment variable
# ARG NEXT_PUBLIC_API_URL
# ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

#RUN echo "NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL"

# Build the Next.js app
RUN npm run build

# Production image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./
RUN npm install --omit=dev

EXPOSE 8080

# Run the Next.js app
CMD ["npm", "dev"]
