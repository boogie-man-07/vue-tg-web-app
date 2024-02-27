import axios from 'axios';

export default {
    sendCard() {
        axios.get('https://sigmabot.ddns.net/test/bot-get-card.php');
    }
}