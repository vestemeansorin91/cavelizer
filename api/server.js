require('dotenv').config();
require('./app/shared/middlewares/passport/passport.middleware');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(require('cors')());
app.use(require('body-parser').json());
app.use(require('morgan')('tiny'));
require('./app/swagger.init').initSwagger(app).then(_ => null);

/* Chat connection / sockets */
const _ = require("lodash");
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

const { User } = require("./app/shared/helpers/user.class");
require("./app/sockets/streams")(io, User, _);
require("./app/sockets/private")(io);
// require('events').EventEmitter.defaultMaxListeners = 20;

/* Routes */
const authRoutes = require('./app/modules/auth/auth.routes');
const userRoutes = require('./app/modules/user/user.routes');
const chatRoutes = require('./app/modules/chat/chat.routes');

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/chat', chatRoutes);

/* Frontend Build / Output */
const uiRoutes = require('./app/modules/ui/ui.routes');
process.env.PWD = process.cwd();
app.use('/ui', express.static(process.env.PWD + '/public/ui'));
app.use('/', uiRoutes);

/* File upload */
app.use('/public/assets', express.static(process.env.PWD + '/public/assets'));

const mongoConfig = require('./app/config/mongo.config');
const srv = (err) => {
    if (err) console.log('Mongo error!', err);
    console.log(`Database is ready! on ${process.env.MONGO_URL}`);
    server.listen(process.env.PORT, () => console.log(`Server started, on port ${process.env.PORT}`));
}
mongoose.connect( process.env.MONGO_URL, mongoConfig,srv);

