export class DefineLine {
  constructor(startX, startY, endX, endY, thickness) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.thickness = thickness;
  }
}

export class DefineCircle {
  constructor(centerX, centerY, radius, startAngle, endAngle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
}

export class DefineX {
  constructor(
    startX,
    startY,
    endX,
    endY,
    thickness,
    startX2,
    startY2,
    endX2,
    endY2,
    thickness2
  ) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.thickness = thickness;
    this.startX2 = startX2;
    this.startY2 = startY2;
    this.endX2 = endX2;
    this.endY2 = endY2;
    this.thickness2 = thickness2;
  }
}

export class DefineZones {
  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }
}
