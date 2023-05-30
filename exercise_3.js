///3.1
function isValidNumber(num){
    if (isFinite(num)){
        const integer = parseInt(num);
        if (integer !== num){
            return false;
        }
        else if(!isFinite(integer) || isNaN(integer)) return false;
        else if (integer>=1 || integer<= 90) return true;
    }
};



 ///3.2
function getDivisors(num){
    const arr = [];
    for (i = 0; i <= Math.sqrt(num); i++){
            if (num === i ** 2){
                arr.push(i);
            }
            else if (num%i === 0){
                arr.push(num, num/i);
            }
    }
    return arr.sort((a,b) => a - b);
}

///3.3
const ellipse = {
    width: 10,
    height: 5,
    getArea: function(){
        return Math.PI * this.width * this.height;
    },
    getPerimeter: function(){
        return 2* Math.PI * Math.sqrt((this.width **2  + this.height**2) / 2);
    },
    getEccentricity: function(){
        return Math.sqrt(1 - (this.height / this.width)**2);
    }
};
