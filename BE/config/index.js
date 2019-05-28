const authRoutes = require('./routes/authRoutes');

const { errorHandler, getUser } = require('./middleware');

module.exports = server => {
	server.use(getUser);
	server.use('/api/auth', authRoutes);
	server.use(errorHandler);
};