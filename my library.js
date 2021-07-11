function bounceOff(obeject1,object2){
    if (obeject1.x - object2.x < object2.width/2 + obeject1.width/2
      && object2.x - obeject1.x < object2.width/2 + obeject1.width/2) {
        obeject1.velocityX = obeject1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  }
  if (obeject1.y - object2.y < object2.height/2 + obeject1.height/2
    && object2.y - obeject1.y < object2.height/2 + obeject1.height/2){
      obeject1.velocityY = obeject1.velocityY * (1);
    object2.velocityY = object2.velocityY * (-1);
  }
  
  }