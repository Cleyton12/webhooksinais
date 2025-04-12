
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  try {
    const { par, tipo, horario, confianca, imagem } = req.body;

    await db.collection("sinais").add({
      par,
      tipo,
      horario,
      confianca,
      imagem: imagem || null,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).json({ mensagem: "Sinal recebido com sucesso" });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao salvar sinal" });
  }
};
