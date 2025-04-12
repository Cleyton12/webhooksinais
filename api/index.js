export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Dados recebidos:', req.body); // Aqui chegam os dados do TradingView
    res.status(200).json({ sucesso: true, mensagem: 'Sinal recebido!' });
  } else {
    res.status(405).json({ erro: 'Método não permitido' });
  }
}
