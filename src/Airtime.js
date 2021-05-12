import axios from 'axios';
import CryptoJS from 'crypto-js';

export class Airtime {
    
    constructor (
        agentId,
        agentPlatform,
        apiKey,
        agentPassword = '',
        airtimeUrl = 'http://35.204.26.22:8086/api/airtime/v2/',
        airtimeStatusUrl = 'http://35.204.26.22:8086/api/airtime/status/v2/'
    ) {
        this.agentId = agentId;
        this.agentPlatform = agentPlatform;
        this.apiKey = apiKey;
        this.agentPassword = agentPassword;
        this.airtimeUrl = airtimeUrl;
        this.airtimeStatusUrl = airtimeStatusUrl;
    }

    toString(){
        return this.agentId + " " + this.agentPlatform;
    }

    makeAirtime(
        operator,
        reference,
        amount,
        mode,
        processingNumber = ''
    ) {
        let hash = CryptoJS.MD5(operator + reference + amount + this.apiKey).toString();
        let agentPassword = CryptoJS.MD5(this.agentPassword).toString();
        return axios.post(this.airtimeUrl, {
            operator: operator,
            reference: reference,
            amount: amount,
            mode: mode,
            agentid: this.agentId,
            agentplatform: this.agentPlatform,
            agentpwd: agentPassword,
            hash: hash,
            processingnumber: processingNumber
          });
    }

    airtimeStatus(
        processingNumber  
    ){
        let hash = CryptoJS.MD5(processingNumber + this.apiKey).toString();
        return axios.post(this.airtimeStatusUrl, {
            processingnumber: processingNumber,
            agentplatform: this.agentPlatform,
            agentid: this.agentId,
            hash: hash,
        });
    }
}
