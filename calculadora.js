const args = process.argv.slice(2);
console.log('Argumntos recebidos:', args);
if (args.length !== 3){
    console.log('❌ Ops! Você precisa digitar exatamente 3 coisas:');
    console.log('📖 Uso correto: node calculadora.js <número1> <operação> <número2>');
    console.log('💡 Exemplo: node calculadora.js 10 + 5');
    console.log('⚙️ Operações didponíveis: + - * /' );
    process.exit(1);
}
    const num1 = parseFloat(args[0]);
    const operacao = args[1];
const num2 = parseFloat(args[2]);
if (isNaN(num1) || isNaN(num2)) {
    console.log('❌ Erro: Os valores devem ser números válidos!');
    console.log('💡 Exemplo correto: node calculadora.js 10.5 + 3.2');
    process.exit(1);
}
console.log(`🔢 Calculando: ${num1} ${operacao} ${num2}`);
let resulatado;
switch (operacao) {
    case'+':
    resulatado = num1 + num2;
    console.log('➕ Fazendo uma soma...');
    break;

    case'-':
    resulatado = num1 - num2;
    console.Console.log('➖ Fazendo uma subtração...');
    break;
    case'*':
    resulatado = num1 * num2;
    console.Console.log('✖️ Fazendo uma multiplicação...');
    break;
     resulatado = num1 / num2;
    console.Console.log('➗ Fazendo uma divisão...');
    break;
    if(num2 === 0){
        console.log('❌ Erro: Não é possivel dividri por zero! ');
        console.log('🤓 Dica: Divisão por zero é indefinida na matemática.');
    }
    resulatado = num1 / num2;
    console.log('➗ Fazendo uma divisão...');
    break;

    default:
        console.log(`❌ Erro: Operação '${operação}' não é válida! `)
console.log('⚙️ Erro: Operações disponiveis: + - * /');
process.exit(1);
}
console.log('');
console.log('🎉 Resultado:');
console.log(`${num1} ${operacao} ${num2} = ${resulatado}`);
if (operacao === '/' && resultado % 1 !== 0){
    console.log(`📊 Resultado detalhado: ${resultado.tofixed(4)}`);
}
