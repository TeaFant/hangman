const regex= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const regexArray = [];
  for (var i = 0; i < regex.length; i++) {
    regexArray.push(regex.charAt(i));
  }

export default regexArray; 