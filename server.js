const express = require('express')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})

// i percorsi sono intuibili pensando a cosa ci stiamo riferendo in quell'operazione, se vogliamo aggiungere un oggetto lo facciamo nell'array generale quindi solo /posts, se volesimo intervenire sul singolo post con delle modifiche o delete it allora ci riferiamo all'id /posts/:id

app.get('/', (req, res) => {
    res.send('Welcome to my blog')
})

// visualizzare tutti gli elementi
app.get('/api/server', (req, res) => {
    res.send('Show all post in page')
})

// visualizzare l'elemento
app.get('/api/server/:id', (req, res) => {
    res.send('Show THE post')
})

// creare un nuovo elemento
app.get('/api/server', (req, res) => {
    res.send('Create new element')
})

// aggiornare più parti di un elemento
app.get('/api/server/:id', (req, res) => {
    res.send('Update the server')
})

// modificare una singola parte di un elemento
app.get('/api/server/:id', (req, res) => {
    res.send('fix one element of resource')
})

// eliminare un post
app.get('/api/server/:id', (req, res) => {
    res.send('delete this element')
})
