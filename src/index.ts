import { Hono } from 'hono';

const app = new Hono();

app.post('/', async (c) => {
    const body = await c.req.json();

    console.log('Received request body:', body);

    // Call ollama api
    const response = await fetch('http://127.0.0.1:11434/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body), // Convert JavaScript object to JSON string
    });

    console.log('Status', response.status);

    const data = await response.json();

    console.log('Received response:', data);

    return c.json(data);
});

app.post('/embed', async (c) => {
    const body = await c.req.json();

    console.log('Received request body:', body);

    // Call ollama api
    const response = await fetch('http://127.0.0.1:11434/api/embed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body), // Convert JavaScript object to JSON string
    });

    console.log('Status', response.status);

    const data = await response.json();

    console.log('Received response:', data);

    return c.json(data);
});

export default app;
