import { Component } from '@angular/core';
import { SlideShow } from 'src/app/Models/slideshow/slide-show';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
   slideshow:SlideShow;
   constructor() {
     this.slideshow = new SlideShow(["assets/one.jpeg","assets/tw.jpg","assets/th.webp",
     "assets/fo.jpg","assets/fi.jpeg"]);
   }
   Next(){
    this.slideshow.Next();
  }

  Previous(){
   this.slideshow.Previous();
    };
  
    getCurrentImage() {
      return this.slideshow.getCurrentImage();
    }
    Play(){
      this.slideshow.Play();
    };

    Stop(){
      this.slideshow.Stop();
    };
}
