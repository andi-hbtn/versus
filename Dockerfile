# Përdor imazhin zyrtar Node.js (versioni i lehtë Alpine)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Kopjo skedarët e paketave
COPY package*.json ./

# Instalo të gjitha libraritë
RUN npm install

# Kopjo pjesën tjetër të kodit
COPY . .

# Deklarimi i ARG-eve që dërgon Easypanel
ARG SMTP_HOST
ARG SMTP_PORT
ARG SMTP_EMAIL
ARG SMTP_PASS
ARG CONTACT_TO_EMAIL


# Kthimi i tyre në ENV që Next.js t'i ketë të disponueshme gjatë build-it
ENV SMTP_HOST=$SMTP_HOST
ENV SMTP_PORT=$SMTP_PORT
ENV SMTP_EMAIL=$SMTP_EMAIL
ENV SMTP_PASS=$SMTP_PASS
ENV CONTACT_TO_EMAIL=$CONTACT_TO_EMAIL

# Build aplikacionin Next.js
RUN npm run build

# Ekspozo portën e Next.js
EXPOSE 3000

# Ndrysho portën default në 3000 dhe hostin në 0.0.0.0
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Komanda për të nisur Next.js në production
CMD ["npm", "start"]