import axios from 'axios';

export default {
    async sendCard() {
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await axios.get('https://sigmabot.ddns.net/test/bot-get-card.php', { headers: headers });
        return response;
    }
}