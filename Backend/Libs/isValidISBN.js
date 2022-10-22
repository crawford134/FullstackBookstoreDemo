
export default function isValidISBN(number){
    if(number){
        if(number.toString().length > 9 && number.toString().length < 14) return true; 
        else return false; 
    }
    else return false; 
}