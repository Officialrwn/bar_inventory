import express from 'express';

const app = express();

app.post('/api/test', async (req, res) => {
	res.send("Test works");
})

export { app as testApi };