import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';


const dist = 'dist';
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });


// Copiar manifest.json
if (!fs.existsSync('manifest.json')) {
console.error('manifest.json não encontrado — ajuste conforme sua extensão');
process.exit(1);
}
fs.copyFileSync('manifest.json', path.join(dist, 'manifest.json'));


// Copia src e icons (se existirem)
if (fs.existsSync('src')) fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
if (fs.existsSync('icons')) fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });


// Limpeza: remover arquivos desnecessários que não devem entrar no pacote
// Ex: node_modules, testes, .git


// Gera ZIP final (extension.zip)
const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });


output.on('close', () => {
console.log(`Build gerado em ${dist}/ e ${dist}/extension.zip — ${archive.pointer()} bytes`);
});
archive.on('warning', (err) => {
if (err.code === 'ENOENT') console.warn(err);
else throw err;
});
archive.on('error', (err) => { throw err; });


archive.pipe(output);
// adiciona conteúdo do dist (exceto extension.zip que ainda não existe no momento)
archive.directory(dist + '/', false);
await archive.finalize();