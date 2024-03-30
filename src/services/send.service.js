import axios from 'axios';

export default {
    sendCard(chatId, cardId) {
        axios.get(`https://sigmabot.ddns.net/test/bot-get-card.php?chatId=${chatId}&cardId=${cardId}`);
    }
}