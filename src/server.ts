import Api from './adapter/rest/api';

// Abstract as config
const port = process.env.PORT || 3000;
const app = Api;

app.listen(port);