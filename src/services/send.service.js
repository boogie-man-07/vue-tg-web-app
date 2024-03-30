import axios from 'axios';

export default {
    sendCard(chatData, cardId) {
        const body = JSON.stringify({
            chatData: chatData,
            cardId: cardId
        });

        axios.post('https://sigmabot.ddns.net/test/bot-get-card.php', body);
    }
}