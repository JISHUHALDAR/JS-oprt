// Second Smallest
// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers

const findSndSmallest = (x,y,z) => {
    if (x==y==z || x<0 || y<0 || z<0){
      return -1
    }
    else if(x>y && x>z && y>z){
      return y
    }
    
    else if(x>y && x>z && y<z){
      return z
    }
    
    else if(y>x && y>z && x>z){
      return x
    }
    
    else if(y>x && y>z && x<z){
      return z
    }
    
    else if(z>x && z>y && x>y){
      return x
    }
    
    else if(z>x && z>y && x<y){
      return y
    }
};