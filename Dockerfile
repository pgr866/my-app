FROM node:24-alpine
WORKDIR /app
RUN apk add --no-cache bash git libc6-compat
ENV SHELL=/bin/bash \
    NEXT_TELEMETRY_DISABLED=1
COPY package*.json source.config.ts ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]