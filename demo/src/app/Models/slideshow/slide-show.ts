export class SlideShow {
  private timer:number|null = null;
  index:number = 0;
  constructor(public img: string[]) {}

   getCurrentImage() {
    return this.img[this.index];
  }

  Next() {
    this.index = this.index+1
    if(this.index == 5)
    {
      this.index = 0;
    }
  }

  Previous() {
    if (this.index === 0) {
      this.index = this.img.length - 1;
    } else {
      this.index -= 1;
    }
  }

  Play() {
    this.timer = window.setInterval(() => this.Next(), 2000);
};

  Stop() {
    if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
  };
}
