FROM node:24-bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY src ./src
COPY scripts ./scripts
ENV NODE_ENV=production PORT=8080 DATA_DIR=/data CLAUDE_AUTH_FILE=/data/claude/.credentials.json
EXPOSE 8080
CMD ["npm", "start"]
