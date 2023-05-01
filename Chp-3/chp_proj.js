const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.splice(0,1,"FIRST")
theList.splice(2,6,"MIDDLE", "hello World", "LAST")

console.log(theList);
