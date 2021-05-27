import axios from 'axios';
import CryptoJS from 'crypto-js';

export class Bill {
    
    constructor(
        agentId, 
        agentPlatform, 
        apiKey,
        agentPassword = '',
        billUrl = 'http://35.204.26.22:8086/api/bill/v2/',
        billAmountUrl = 'http://35.204.26.22:8086/api/bill/getamount/',
        billStatusUrl = 'http://35.204.26.22:8086/api/bill/status/v2/'
    ){
        this.agentId = agentId;
        this.agentPlatform = agentPlatform;
        this.apiKey = apiKey;
        this.agentPassword = agentPassword;
        this.billUrl = billUrl;
        this.billAmountUrl = billAmountUrl;
        this.billStatusUrl = billStatusUrl;
    }

    toString(){
        return this.agentId + " " + this.agentPlatform;
    }

    /**
     * When making payment here is the format
     *   biller: canal, camwater, eneoprepay, eneopostpay, uds
     *   billid: 14, 12, 12
     */
    payBill(
        biller,
        billid,
        amount,
        mode,
        processingNumber = ''
    ) {
        let hash = CryptoJS.MD5(biller + billid + amount + this.apiKey).toString();
        let agentPassword = CryptoJS.MD5(this.agentPassword).toString();
        return axios.post(this.billUrl, {
            biller: biller,
            billid: billid,
            amount: amount,
            mode: mode,
            agentid: this.agentId,
            agentplatform: this.agentPlatform,
            agentpwd: agentPassword,
            hash: hash,
            processingnumber: processingNumber
          });
    }

    getBillAmount(
        biller,
        billid
    ){
        let hash = CryptoJS.MD5(biller + billid + this.apiKey).toString();
        return axios.post(this.billAmountUrl, {
            biller: biller,
            billid: billid,
            agentid: this.agentId,
            hash: hash
        });
    }

    getBillStatus(
        processingNumber = ''
    ){
        let hash = CryptoJS.MD5(processingNumber + this.apiKey).toString();

        return axios.post(this.billStatusUrl, {
            agentid: this.agentId,
            agentplatform: this.agentPlatform,
            processingnumber: processingNumber,
            hash: hash
        });
    }
}