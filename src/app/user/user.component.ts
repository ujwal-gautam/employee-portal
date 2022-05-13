import {Component, OnInit} from '@angular/core';
import {PageUser} from "./user-model/pageUser";
import {UserService} from "./user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pageUsers: PageUser | undefined;

  selectedPage: number = 1;
  maxSize = 10;
  recordsPerPage: number = 10;
  numPages: any | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserList(0);
    // this.getUserData();
  }

  getUserList(page: number): void {
    this.userService.getUserDetails(page, this.recordsPerPage).subscribe(page => this.pageUsers = page);


  }


  onSelect(page: number): void {
    console.log('selected page : ' + page);
    this.selectedPage = page;
    this.getUserList(page);
  }
}
