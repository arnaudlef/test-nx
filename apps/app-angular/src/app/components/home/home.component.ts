import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data = {
        route1: "/api : ",
        route2: "/api/test : ",
    }

    constructor(private http: HttpClient) { }

    async ngOnInit() {
        this.getAPI();
        this.getTest();
    }

    getAPI() {
        return this.http.get('/api').toPromise().then(
            (data) => {
                console.log('data: ', data)
                this.data.route1 += data['message'];
            }),
            (error: any) => {
                console.log(error)
            }
    }

    getTest() {
        return this.http.get('/api/test').toPromise().then(
            (data) => {
                this.data.route2 += data['message'];
            }),
            (error: any) => {
                console.log(error)
            }
    }
}
