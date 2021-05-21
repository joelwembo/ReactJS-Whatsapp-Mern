import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
const app = express();
const port = process.env.PORT || 9000;

const connection_url = 'mongodb://127.0.0.1:27017/whatsapp-db';

try {
    mongoose.connect(connection_url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connected to the database');
}
catch (exception_var) {
    console.log(exception_var);
  }

app.use(express.json());  
app.get('/', (req,res) => res.status(200).send('hello word') )


app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data) // OKay
        }
  })
})

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1207725",
  key: "d0ce06d1a5b732d08644",
  secret: "ba5778d9f722b60aa7b7",
  cluster: "ap1",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});



app.post('/api/v1/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


try {
    app.listen(port, () => console.log
    (`Listing on localhost:${port}`));
}
catch (error) {
    console.log(`Couldn't connect please check you` , error  );
}


