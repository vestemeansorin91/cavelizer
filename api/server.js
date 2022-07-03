require('dotenv').config();
require('./app/shared/middlewares/passport/passport.middleware');

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* Morgan */
const morgan = require('morgan');
app.use(morgan('tiny'));

/* Swagger */
const { initSwagger } = require('./app/swagger.init');

/* Prepare mongo setup */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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

initSwagger(app);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err) {
    if (err) console.log('Mongo error!', err);
    console.log(`Database is ready! on ${process.env.MONGO_URL}`);
    app.listen(process.env.PORT, () => console.log(`Server started, on port ${process.env.PORT}`));
  }
);
