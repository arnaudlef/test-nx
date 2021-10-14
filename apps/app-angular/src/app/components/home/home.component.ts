import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data: any;

    constructor(private http: HttpClient) { }

    async ngOnInit() {
        return this.http.get('http://localhost:4200/api').toPromise().then(
            (data) => {
                console.log('data: ', data)
                this.data = data;
            }),
            (error: any) => {
                console.log(error)
            }
    }
}
