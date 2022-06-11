// Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|

const getValue = (C) => {
    if (C=='P'|| C=='p'){
      return "PrepBytes"
    }
    else if (C=='Z' || C=='z'){
      return "Zenith  "
 }
   else if (C=='E' || C=='e'){
      return "Expert Coder "
 }
   else if (C=='D' || C=='d'){
      return " Data Structure "
 }
 else {
   return -1
 }
    
 };
 