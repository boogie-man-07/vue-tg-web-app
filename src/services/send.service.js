import axios from 'axios';

export default {
    sendCard(chatData, cardId) {
        const headers = {
            "Content-Type": "application/json"
        };

        const body = JSON.stringify({
            chatData: chatData,
            cardId: cardId
        });

        axios.post('https://sigmabot.ddns.net/test/bot-get-card.php', body, { headers: headers });
    }
}