import axios from 'axios';

export default {
    sendCard(id) {
        axios.get(`https://sigmabot.ddns.net/test/bot-get-card.php?id=${id}`);
    }
}