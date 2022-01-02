FROM node:12.18.1
ENV NODE_ENV=production
RUN useradd -u 1003 -g root zoo2
WORKDIR /app
RUN mkdir -p node_modules
COPY ["*.*", "./"]
COPY ["./node_modules", "./node_modules/"]
RUN chmod -R 775 /app
USER 1003