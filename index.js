import crimes from './data/crimes_jf_aranha_booleano.json' with { type: 'json' };
import express from 'express';

const app = express();

app.use(express.json());

app.get('/crimes', (req, res) => {
    const  filtroComum  = req.query.crimeComum;
    const isComum = filtroComum === 'true' ;
    if(filtroComum !== undefined) {
        const crimesComum = crimes.filter(crime => crime.crimeComum === isComum);
        return res.json(crimesComum);
    }
    return res.json(crimes);
});

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/crimes`);
});
