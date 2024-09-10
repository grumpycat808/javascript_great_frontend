function sumDigits(number) {
    if (number < 10) return number
    return sumDigits(Math.floor(number / 10)) + (number % 10)
}

function array6(nums, index) {
    if (index >= nums.length || index < 0) return false

    if (nums[index] === 6) {
        return true
    } else {
        return array6(nums, index + 1)
    }
}

function fib(number) {
    if (number === 0) return [0]
    if (number === 1) return [0, 1]
    const returnArr = [0, 1]
    for (let index = 2; index < number; index++) {
        returnArr.push(returnArr[index - 2] + returnArr[index - 1])
    }

    return returnArr
}

function pairStar(str) {
    if (str.length <= 1) return str

    if (str.charAt(0) === str.charAt(1)) {
        console.log('HERE')
        return str.charAt(0) + '*' + pairStar(str.substring(1))
    } else {
        console.log('HERE')
        return str.charAt(0) + pairStar(str.substring(1))
    }
}

function nestParen(str) {
    if(str.length === 0) return true;
    if(str.length === 1) return false;
    if(str.charAt(0) === "(" && str.charAt(str.length - 1) === ")") {
        return nestParen(str.substring(1, str.length  - 1))
    } else {
        return false;
    }
}

function stringClean(str) {
  if(str.length <= 1) return str;

  if(str.charAt(0) === str.charAt(1)) {
    return stringClean(str.substring(1))
  } else {
    return str.charAt(0) + stringClean(str.substring(1))
  }
}

function parenBit( str) {
  if(str.charAt(0) === "(" && str.charAt(str.length - 1) === ")") return str;

  if(str.length <= 1) return;

  if(str.charAt(0) === "(") {
    return parenBit(str.substring(0, str.length - 1))
  } else if (str.charAt(str.length - 1) === ")") {
    return parenBit(str.substring(1))
  } else {
    return parenBit(str.substring(1, str.length - 1))
  }
}

function countHi(str) {
  if(str.length <= 2) {
    if(str === 'hi') return 1;
    return 0;
  }

  if(str.charAt(0) === 'h' && str.charAt(1) === 'i') {
    return 1 + countHi(str.substring(2));
  } else {
    return countHi(str.substring(1))
  }  
}

console.log(countHi("asdojk"))