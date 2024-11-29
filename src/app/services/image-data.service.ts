import {Injectable, signal} from '@angular/core';
import {ImageData} from '../models/image-data';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imageData = signal<ImageData>(
    {src: "https://fastly.picsum.photos/id/678/2000/1000.jpg?hmac=KnYsrLVGqwhBuWiuJFPkQwp03sL-KTZMFVVrJR2lpIw", focusPoint: {x: 50, y: 50}})

  constructor() { }
}
