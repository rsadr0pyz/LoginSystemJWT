import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UsersService } from '../../Services/users.service';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
        selector: 'app-users-table',
        standalone: true,
        imports: [DataTableComponent],
        templateUrl: './users-table.component.html',
        styleUrl: './users-table.component.css'
})
export class UsersTableComponent implements OnInit {

        userList: User[] = [];
        validKeys: (keyof User)[] = ['firstName', 'lastName', 'email', 'role']

        constructor(private userService: UsersService){}

        ngOnInit(): void {
                this.userService.getAll().subscribe((users) => {
                        this.userList = users
                        console.log(this.userList)
                });
        }
}
