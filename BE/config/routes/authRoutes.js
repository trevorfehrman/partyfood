const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const path = require('path');

const config = require('../../config/auth/config');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: [config.AUDIENCE],
  issuer: `https://${config.AUTH0_DOMAIN}/`,
  algorithm: 'RS256'
});

router.get('/', (req, res, next) => {
  res.send('woooooooooooooO!!!!!!!!!!!!');
  console.log('sup');
});

router.get('/authtest', authCheck, (req, res, next) => {
  res.send('you did it');
  console.log('supbabyyyyy');
});

module.exports = router;
