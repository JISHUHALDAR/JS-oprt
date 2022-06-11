// Your school has the following grading system based upon the marks(M) obtained by a student:

// If 
// M
// ≤
// 10
// , the grade will be 
// E
// .
// If 
// 11
// ≥
// M
// ≤
// 20
// , the grade will be 
// D
// .
// If 
// 21
// ≥
// M
// ≤
// 30
// , the grade will be 
// C
// .
// If 
// 31
// ≥
// M
// ≤
// 40
// , the grade will be 
// B
// .
// If 
// 41
// ≥
// M
// ≤
// 50
// , the grade will be 
// A
// .
// Your friend will enter his marks out of 
// 50
// , and your task is to print his grades using a switch statement.

const findGrades = (M) => {
    switch(true){
      case M<=10:
        return 'E'
        break;
        case M>=11 && M<=20:
        return 'D'
        break;
        case M>=21 && M<=30:
        return 'C'
        break;
        case M>=31 && M<=40:
        return 'B'
        break;
        case M>=41 && M<=50:
        return 'A'
        break;
        default:
        return -1
        break;
    }
};