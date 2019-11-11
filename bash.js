// process.stdout.write('prompt > ');
// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const pwd = process.cwd();
  if (data.toString().trim() === 'pwd') {
    process.stdout.write(pwd);
  } else {
    const cmd = data.toString().trim();
    process.stdout.write('You typed!!!!: ' + cmd);
  }

  process.stdout.write('\nprompt > ');
});
