function doConvert() {
  /* Input field value */
  let numberInput = document.querySelector('#numberInput').value;

  /* Result field */
  let myDiv = document.querySelector('#result');

  //   Take base number 1-19 to word in string

  let oneToTwenty = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];

  //   Take tenth number to concat

  let tenth = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

//   If user enter over 7 digit than return weird message

  if (numberInput.toString().length > 7) return (myDiv.innerHTML = 'why you need to convert over million.Give me money than I will convert for you 🙄'); 
  console.log(numberInput);

//   If you understand this REGEX you are pro 🧠

  let num = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);


  /*=================================================================================
  =            Open console for better understand to understand what magic happening =
  ====================================================================================*/
  
  console.log(num);
  
  /*=====  console log end  ======*/
  

  //   If user enter text instead of Number than return weird message again. 😌 
  
  if (!num) return(myDiv.innerHTML = 'You are here to convert Number not word 😑');

  
  /*=============================================
  =            Output/Result block            =
  =============================================*/
  
// If user input million dollar input .oh you are so rich 🤑 

  let outputText =
    num[1] != 0
      ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) +
        ' million '
      : '';

  outputText +=
    num[2] != 0
      ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) +
        'hundred '
      : '';

  outputText +=
    num[3] != 0
      ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) +
        ' thousand '
      : '';

  outputText +=
    num[4] != 0
      ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +
        'hundred '
      : '';
  outputText +=
    num[5] != 0
      ? oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
      : '';

    //   Result output in HTML

  myDiv.innerHTML = outputText;
  
}
