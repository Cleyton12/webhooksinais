export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Recebido:', req.body);
    res.status(200).json({ sucesso: true, mensagem: 'Sinal recebido com sucesso!' });
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
