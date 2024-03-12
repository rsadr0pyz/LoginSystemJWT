import { Component } from '@angular/core';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-user-management-tab',
  standalone: true,
  imports: [UsersTableComponent],
  templateUrl: './user-management-tab.component.html',
  styleUrl: './user-management-tab.component.css'
})
export class UserManagementTabComponent {

}
