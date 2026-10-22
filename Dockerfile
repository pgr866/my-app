FROM node:24-alpine
ENV SHELL=/bin/bash \
    NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache bash git libc6-compat
WORKDIR /app
COPY package*.json source.config.ts ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
