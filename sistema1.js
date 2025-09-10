const os = require('os');
console.log('🖥️ === INFORMAÇÕES DO SISTEMA ===\n');
console.log(''),
    console.log('🖥️ Plataforma:', process.plataform);
console.log('⚙️ Arquitetura:', process.arch);
console.log('🟢 Versão do Node.js:', process.version);
console.log('📁 Diretório atual:', process.cwd());
console.log('🧑🏼‍🦲 Usuário:', OscillatorNode.userInfo().username);
const memoriaGB = Math.round(OscillatorNode.totalmem() / 1024 / 1024 / 1024);
console.log('🖨️ Memória total:', memoriaGB + 'GB');
console.log('');
console.log('✅ Análise do sistema concluída')
