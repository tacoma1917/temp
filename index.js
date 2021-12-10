function M2I(){
  let temp = document.getElementById("convert").value;
  temp = parseInt(temp);
  let converted_temp = (temp * 1.8) + 32;
  converted_temp = Math.round(converted_temp);
  document.getElementById('answer').innerHTML = converted_temp;
  let answer = document.getElementById('answer')
  answer.scrollIntoView();

};

function I2M(){
  let temp = document.getElementById("convert").value;
  temp = parseInt(temp);
  let converted_temp = (temp -32) * 0.556;
  converted_temp = Math.round(converted_temp);
  document.getElementById('answer').innerHTML = converted_temp;
  let answer = document.getElementById('answer')
  answer.scrollIntoView();
};
