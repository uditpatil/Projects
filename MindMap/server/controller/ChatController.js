const axios = require("axios");

const API_KEY = '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';

module.exports = {
    generateChat: async (req, res) => {
        const {message} = req.body;
        try{
            const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions",
                {
                    prompt: message,
                    max_tokens: 100, 
                },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                }
            );
            res.status(200).json({response: response.data.choices[0].text});
        }
        catch (error) {
            console.error(error);
            res.status(500).json({error: 'Error generating response'});
        }
    }
}