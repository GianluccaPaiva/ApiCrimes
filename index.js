import crimes from './data/crimes_jf_aranha_booleano.json' with { type: 'json' };
import express from 'express';

const app = express();

app.use(express.json());

app.get('/crimes', (req, res) => {
    const filtro = req.query;

    if(Object.keys(filtro).length === 0) {
        return res.json(crimes);
    }

    let crimesFiltrados = crimes;
    
    for(let chave in filtro) {
        let valorDeBusca = filtro[chave];
        
        if (valorDeBusca === "true") {
            valorDeBusca = true;
        } else if (valorDeBusca === "false") {
            valorDeBusca = false;

        } 
       
        else if (chave === 'id') {
            valorDeBusca = Number(valorDeBusca);
        }
     
        else if (typeof valorDeBusca === 'string') {
            valorDeBusca = valorDeBusca.toLowerCase();
        }

        crimesFiltrados = crimesFiltrados.filter(crime => {
            
            let valorDoCrime;
         
            if (chave === 'bairro' || chave === 'cidade' || chave === 'ponto_referencia') {
                valorDoCrime = crime.localizacao[chave];
            } else {
                valorDoCrime = crime[chave];
            }

      
            if (valorDoCrime === undefined || valorDoCrime === null) {
                return false;
            }

            if (typeof valorDoCrime === 'string') {
                valorDoCrime = valorDoCrime.toLowerCase();
                
                if (chave === 'incidente' || chave === 'ponto_referencia') {
                    return valorDoCrime.includes(valorDeBusca); 
                }
            }

       
            return valorDoCrime === valorDeBusca;
        });
    }

    return res.json(crimesFiltrados);
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

