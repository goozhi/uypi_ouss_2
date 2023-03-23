function objectToLabelGoto(obj) {
    let output = '';
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        output += `${key}:`;
        if (typeof obj[key] === 'object') {
          output += '\n' + objectToLabelGoto(obj[key]).replace(/\n/g, '\n  ');
        } else {
          output += `goto ${obj[key]};\n`;
        }
      }
    }
    return output;
  }
  
  // Example usage
  const obj = {
    start: {
      first: 'second',
      third: {
        fourth: 'fifth'
      }
    },
    second: {
      done: true
    }
  };
  const output = objectToLabelGoto(obj);
  console.log(output);