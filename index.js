const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://menu95.github.io/testepages/',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/', // rewrite path
  },
  onProxyReq: (proxyReq, req, res) => {
    // Adicione qualquer cabeçalho adicional aqui, se necessário
  },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
