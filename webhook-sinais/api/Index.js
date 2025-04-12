export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Sinal recebido:', req.body);
    res.status(200).json({ sucesso: true, msg: 'Sinal recebido com sucesso!' });
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
