import axios from 'axios';
import CryptoJS from 'crypto-js';

export class Ecommerce {

    constructor(
        store,
        apiKey,
        secretCode = '',
        collectUrl = 'http://35.204.26.22:8086/api/ecommerce/collect/',
        payoutUrl = 'http://35.204.26.22:8086/api/ecommerce/payout/',
        depositUrl = 'http://35.204.26.22:8086/api/ecommerce/deposit/',
        changeKeyUrl = 'http://35.204.26.22:8086/api/ecommerce/changekey/',
        transactionStatusUrl = 'http://35.204.26.22:8086/api/ecommerce/transaction/status/',
        acceptUrl = '',
        cancelUrl = '',
        declineUrl = '',
        notifyUrl = ''
    ){
        this.store = store;
        this.apiKey = apiKey;
        this.secretCode = secretCode;
        this.collectUrl = collectUrl;
        this.payoutUrl = payoutUrl;
        this.depositUrl = depositUrl;
        this.changeKeyUrl = changeKeyUrl;
        this.transactionStatusUrl = transactionStatusUrl;
        this.acceptUrl = acceptUrl;
        this.cancelUrl = cancelUrl;
        this.declineUrl = declineUrl;
        this.notifyUrl = notifyUrl;
    }

    collect(
        provider,
        reference,
        amount,
        code = '',
        purchaseRef = '',
        description = '') {

        let response;
        switch (provider) {
            case 'mtn_mobilemoney_cm':
                response = this.makePayment(
                    provider,
                    reference,
                    amount,
                    code,
                    purchaseRef,
                    description
                );
                return response;
            case 'orange_money_cm':
                response = this.makePayment(
                    provider,
                    reference,
                    amount,
                    code,
                    purchaseRef,
                    description
                );
                return response;
            case 'express_union_mobilemoney':
                response = this.makePayment(
                    provider,
                    '237' + reference,
                    amount,
                    code,
                    purchaseRef,
                    description
                );
                return response;
            case 'afrikpay':
                response = this.makePayment(
                    provider,
                    '237' + reference,
                    amount,
                    code,
                    purchaseRef,
                    description
                );
                return response;
            default:
                console.log("Provider must be correctly define");
            }
    }

    makePayment(
        provider,
        reference,
        amount,
        code = '',
        purchaseRef = '',
        description = ''
    ) {
        let hash = CryptoJS.MD5(provider + reference + amount + this.apiKey).toString();
        return axios.post(this.collectUrl, {
            provider: provider,
            reference: reference,
            amount: amount,
            description: description,
            purchaseref: purchaseRef,
            store: this.store,
            hash: hash,
            code: code,
            notifurl: this.notifyUrl,
            accepturl: this.acceptUrl,
            cancelurl: this.cancelUrl,
            declineurl: this.declineUrl
          });
    }

    deposit(){
        let hash = CryptoJS.MD5(this.store + this.apiKey).toString();
        return axios.post(this.depositUrl, {
            store: this.store,
            hash: hash
        });
    }

    transactionStatus(purchaseRef){
        let hash = CryptoJS.MD5(purchaseRef + this.apiKey).toString();
        return axios.post(this.transactionStatusUrl, {
            store: this.store,
            hash: hash,
            purchaseref: purchaseRef
        });
    }

    toString(){
        
    }
}
