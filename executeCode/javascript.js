const executeJavaScript = async (codeFile, inputs, timeout = 8) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'node',
    args: [],
    timeout,
    language: 'js',
    version: '16.13.2',
    needCompile: false,
  });
};

module.exports = {
  executeJavaScript,
};
