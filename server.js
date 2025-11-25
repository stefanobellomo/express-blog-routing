const express = require('express')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})

// i percorsi sono intuibili pensando a cosa ci stiamo riferendo in quell'operazione, se vogliamo aggiungere un oggetto lo facciamo nell'array generale quindi solo /posts, se volesimo intervenire sul singolo post con delle modifiche o delete it allora ci riferiamo all'id /posts/:id

// entry point
app.get('/', (req, res) => {
    res.send('Welcome to my blog')
})



// index - visualizzare tutti gli elementi
app.get('/api/server', (req, res) => {
    res.send('Lista dei post')
})

// show - visualizzare l'elemento
app.get('/api/server/:id', (req, res) => {
    res.send(`Singolo post con id: ${req.params.id}`)
})

// store - creare un nuovo elemento
app.post('/api/server', (req, res) => {
    res.send('Create new element')
})

// update - aggiornare più parti di un elemento o interamente
app.put('/api/server/:id', (req, res) => {
    res.send(`aggiornare il post con id: ${req.params.id}`)
})

// modify - modificare una singola parte di un elemento
app.patch('/api/server/:id', (req, res) => {
    res.send(`aggiornare  qualche elemento del post con id: ${req.params.id}`)
})

// destroy - eliminare un post
app.delete('/api/server/:id', (req, res) => {
    res.send(`eliminare il post con id: ${req.params.id}`)
})
