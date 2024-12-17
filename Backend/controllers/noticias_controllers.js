const axios = require("axios");

const apiKey = process.env.API_KEY;
const endPointApi = process.env.ENDPOINT_API

const noticias = async (req, res) => {
    const { query, lang, country } = req.query;

  try {
    const url = `${endPointApi}/search?q=${query}&lang=${lang}&country=${country}&token=${apiKey}`;
    const response = await axios.get(url);

    res.json({success: true, message: response.data})
  } catch (error) {
    console.error("Erro ao buscar notícias:", error.message);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
};


const topNoticias = async (req, res) => {
    const { country, lang } = req.query;
    
    try {
        const url = `${endPointApi}/top-headlines?lang=${lang}&country=${country}&apikey=${apiKey}`
        const response = await axios.get(url)

        res.json({success: true, message: response.data})
    } catch (error) {
        console.log(error)
        res.json({sucess:false, message: message.error})   
    }
};

module.exports = { noticias, topNoticias };