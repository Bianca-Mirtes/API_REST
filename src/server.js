import app from './app.js'

const PORT = process.env.PORT || 3000

// escutar a porta
app.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`);
})