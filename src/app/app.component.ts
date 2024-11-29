import {Component, Inject, signal} from '@angular/core';
import {FocusPointModalComponent} from './focus-point-modal/focus-point-modal.component';
import {FocusPointImageComponent} from './focus-point-image/focus-point-image.component';
import {ImageDataService} from './services/image-data.service';
import {ImageData} from './models/image-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FocusPointModalComponent, FocusPointImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imageDataService: ImageDataService = Inject(ImageDataService);

  imageDataSignal = signal<ImageData>(
    {src: "https://fastly.picsum.photos/id/678/2000/1000.jpg?hmac=KnYsrLVGqwhBuWiuJFPkQwp03sL-KTZMFVVrJR2lpIw", focusPoint: {x: 50, y: 50}})
  readonly imageData = this.imageDataSignal();
  // readonly imageData: ImageData = this.imageDataService.imageData();
}
