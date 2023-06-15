import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-dafault',
  templateUrl: './dafault.component.html',
  styleUrls: ['./dafault.component.scss']
})
export class DafaultComponent {
  SideBarOpen = true;
  ngOnInit() {}
sideBareToggler(){
this.SideBarOpen = !this.SideBarOpen;

}
}
