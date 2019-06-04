const authRoutes = require('./routes/authRoutes.js');
const partyRoutes = require('./routes/parties');
const usersRoutes = require('./routes/users');

const { errorHandler } = require('./middleware');

module.exports = server => {
  server.use('/api/auth', authRoutes);
  server.use('/api/users', usersRoutes);
  server.use('/api/parties', partyRoutes);
  server.use(errorHandler);
};
