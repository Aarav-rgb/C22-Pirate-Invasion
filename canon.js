class Canon {
constructor(x, y, w, h, angle) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.angle = angle
    this.canon_Image = loadImage("assets/canon.png");
    this.canon_Base = loadImage("assets/canonBase.png");
}
display(){
    image(this.canon_Image,0, 0, this.w, this.h);
    image(this.canon_Base,70, 20, 200, 200);
    noFill();
}
}