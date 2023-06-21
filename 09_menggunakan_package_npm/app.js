const validator = require('validator');

// console.log(validator.isEmail('foo@bar.com'));
// console.log(validator.isMobilePhone('075312345678', 'id-ID'));
// console.log(validator.isNumeric('075A12345678'));
// console.log(validator.isNumeric('075A12345678'));

const chalk = require('chalk'); // versi 4.1.0

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue.italic('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again! '
	+ chalk.red.strikethrough('strike!')
));

// Tag Template literal
log(chalk`Hello, {black.bgRed.bold.strikethrough NodeJS}!`);
