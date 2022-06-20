const mongoose = require('mongoose')

mongoose.connect(mongoURL, {     
    useNewUrlParser: true,
useUnifiedTopology: true}); 