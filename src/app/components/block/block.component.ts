import { Component, OnInit, Input } from '@angular/core';
import { GetUsersService } from '../../get-users.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.less']
})
export class BlockComponent implements OnInit {
  @Input() public userProfile;
  public users = null;
  constructor(private getUsers: GetUsersService){}

  ngOnInit(){
    this.getUsers.getUsers()
    .subscribe ((response: Response) => {
      //console.log(response)
      this.users = response;
    })
  }

}
