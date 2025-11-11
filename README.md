# prova-ci-nome-sobrenome

Relatório do projeto para entrega da prova (formato PDF). Este repositório contém uma função simples com testes unitários em Jest e um pipeline de CI que gera o artefato de teste.

## Objetivo

Entregar um relatório em PDF com a descrição do projeto, explicação dos testes, como executar localmente e os resultados obtidos.

## Estrutura do projeto

- `src/index.js` — implementação da função `sum(a, b)`.
- `tests/sum.test.js` — testes unitários com Jest (2 casos).
- `package.json` — scripts e dependências (Jest como devDependency).

## Pré-requisitos

- Node.js (recomendo v16+).
- Opcional: Pandoc (para converter Markdown -> PDF) ou o Visual Studio Code com a extensão "Markdown PDF".

## Como executar localmente (passo a passo)

Abra o PowerShell na raiz do projeto (`c:\Users\Liceu\Desktop\P2\prova-ci-Aliceu-Fontana`) e execute:

```powershell
npm install
```

Para rodar os testes com Jest:

```powershell
npm test
```

Para gerar um arquivo JSON com o resultado dos testes (útil para incluir no relatório):

```powershell
npm test -- --json --outputFile=jest-report.json
```

O comando acima criará `jest-report.json` na raiz do projeto contendo um resumo detalhado dos testes.

## Como preparar o relatório (report.md) com resultados dos testes

1. Copie o conteúdo do `README.md` para um novo arquivo `report.md` (que será convertido em PDF):

```powershell
Get-Content README.md | Set-Content report.md
```

2. Append (anexar) uma seção com os resultados dos testes (o JSON gerado):

```powershell
Add-Content report.md "`n## Resultados dos testes`n"
Add-Content report.md '```json'
Get-Content jest-report.json | ForEach-Object { Add-Content report.md $_ }
Add-Content report.md '```'
```

Isso criará `report.md` contendo o texto do README e um bloco de código com o JSON do Jest.

Dica: se preferir um sumário mais legível, abra `jest-report.json`, copie os campos importantes (por exemplo: numTotalTests, numPassedTests, numFailedTests, startTime, endTime) e cole como um pequeno parágrafo em `report.md`.

## Como exportar o Markdown para PDF (três métodos comuns)

Método A — Pandoc (recomendado quando disponível):

- Instale Pandoc (https://pandoc.org/installing.html). Em Windows você pode usar Chocolatey: `choco install pandoc` (se tiver Chocolatey).
- Opcional: instale uma engine de PDF (TeX Live ou wkhtmltopdf) para melhor qualidade.

Com `pandoc` instalado, rode no PowerShell:

```powershell
pandoc report.md -o report.pdf --pdf-engine=xelatex
```

Se não tiver LaTeX, mas tiver o `wkhtmltopdf` instalado:

```powershell
pandoc report.md -o report.pdf --pdf-engine=wkhtmltopdf
```

Método B — VS Code + extensão "Markdown PDF":

1. Abra o `report.md` no VS Code.
2. Instale a extensão "Markdown PDF".
3. Use o comando da paleta (Ctrl+Shift+P) "Markdown PDF: Export (pdf)".

Método C — Usando um utilitário npm (simples, sem instalar Pandoc):

```powershell
npx markdown-pdf report.md -o report.pdf
```

Nota: algumas ferramentas de conversão podem renderizar CSS/estilos de forma diferente; escolha a que melhor atende a formatação desejada.

## Exemplo de execução e resultado esperado

Após `npm install` e `npm test -- --json --outputFile=jest-report.json`, em um repositório com os testes fornecidos você deverá ver algo como:

- Total de testes: 2
- Passed: 2
- Failed: 0

No `jest-report.json` haverá campos como `numTotalTests`, `numPassedTests`, `numFailedTests` e o `testResults` detalhado por arquivo.

## O que entregar

- `report.pdf` gerado a partir de `report.md` (que inclui a descrição do projeto e os resultados dos testes).
- (Opcional) anexar `jest-report.json` como evidência bruta.

## Observações finais

- Se quiser, eu posso adicionar um pequeno script que gera automaticamente `report.md` formatado a partir do `README.md` e do `jest-report.json` para facilitar a exportação — informe se quer que eu inclua esse script no repositório.

---

Arquivo `src/index.js` contém a função principal (`sum`) e `tests/sum.test.js` os testes de exemplo. Boa sorte na entrega da prova!
