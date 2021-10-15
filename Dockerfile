FROM node:16-alpine
WORKDIR /
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont      
COPY package*.json ./
RUN npm ci
COPY . .
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
ENV PORT=1668
EXPOSE 1668
RUN npm run scully
CMD ["npm", "run", "scully:serve"]
