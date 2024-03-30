import axios from 'axios';

export default {
    sendCard(chatId, cardId) {
        const headers = {
            "Content-Type": "application/json"
        };

        const body = JSON.stringify({
            chatId: chatId,
            cardId: cardId
        });

        axios.post('https://sigmabot.ddns.net/test/bot-get-card.php', body, { headers: headers });
    }
}