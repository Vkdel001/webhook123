const express = require('express');
const app = express();

app.use(express.json());  

app.post('/webhooked', (req, res) => {

    console.log('Received webhook:', req.body);  
     
    res.status(200).send('Webhook received!');  
});

app.get('/webhooked', (req, res) => {
    res.send('<h1>Welcome to the  Page!</h1><p>This is a simple page.</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
