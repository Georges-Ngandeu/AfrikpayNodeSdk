import axios from 'axios';
import CryptoJS from 'crypto-js';

export class Account {
    
    constructor(
        agentId,
        agentPlatform,
        apiKey,
        transactionStatusUrl = 'http://35.204.26.22:8086/api/account/agent/balance/v2/',
        balanceUrl = 'http://35.204.26.22:8086/api/account/agent/balance/v2/',
        changeKeyUrl = 'http://35.204.26.22:8086/api/account/developer/changekey/'
        ) {
        this.agentId = agentId;
        this.agentPlatform = agentPlatform;
        this.apiKey = apiKey;
        this.transactionStatusUrl = transactionStatusUrl;
        this.balanceUrl = balanceUrl;
        this.changeKeyUrl = changeKeyUrl;
    }

    toString(){
        
    }

    balance(){
        let hash = CryptoJS.MD5(this.agentId + this.apiKey).toString();
        return axios.post(this.balanceUrl, {
            agentid: this.agentId,
            agentplatform: this.agentPlatform,
            hash: hash,
        });
    }

    changeKey(){
        return axios.post(this.changeKeyUrl, {
            agentid: this.agentId,
            apikey: this.apiKey,
        });
    }

    transactionStatus(transactionId) {
        return axios.post(this.transactionStatusUrl, {
            transactionid: transactionId,
            
        });
    }
}