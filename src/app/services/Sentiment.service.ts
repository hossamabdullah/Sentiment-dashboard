import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class SentimentService {
    searchText: String;
    public subject:Subject<any> = new Subject();


    constructor(private http: Http) {}

    performSentiment(key: String) {
        return this.http.get('http://localhost:3003/sentiment/online?keyword='+key);
    }


    getSentiments(key: String){
        return this.http.get('http://localhost:3003/historyOfTopics?topic='+key);
    }

    getTweets(sentimentId: String){
        return this.http.get('http://localhost:3003/historyOfSentences?topic='+sentimentId);
    }

    emitSearchDone(){
        console.log("aaaa")
        let data = {
            Positive: 1548,
            Negative: 335,
            Neural: 310
        }
        this.subject.next(data);
    }
    
}