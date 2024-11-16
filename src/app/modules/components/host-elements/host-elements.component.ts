import { Component } from '@angular/core';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [ProfilePhotoComponent],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss'
})
export class HostElementsComponent {

}
