const authRoutes = require('./routes/authRoutes');
const partyRoutes = require('./routes/parties');

const { errorHandler, getUser } = require('./middleware');

module.exports = server => {
  //server.use(getUser);
  // server.use('/api/auth', authRoutes);
  server.use('/api/parties', partyRoutes);
  server.use(errorHandler);
};
