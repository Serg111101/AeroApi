import express from 'express';

import auth from './auth.api';
import authChildren from './children.api';
import aeroSpace from './aeroSpace.api';

const app = express();

// API
app.use('/auth', auth);
app.use('/v2', authChildren);
app.use('/aeroSpace', aeroSpace);

export default app;
