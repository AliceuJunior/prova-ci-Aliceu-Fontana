# prova-ci-Aliceu-Fontana

Autor: Aliceu Donizete Fontana Junior

Projeto simples com a função `sum` e testes unitários em Jest. O pipeline de Integração Contínua (GitHub Actions) executa os testes em push/pull request para a branch `main`.

## Estrutura

- `src/index.js` — implementação da função `sum(a, b)`.
- `tests/sum.test.js` — testes unitários do Jest (2 casos: soma básica e soma com zero).
- `package.json` — scripts e dependências (Jest como devDependency).

## Como executar localmente

No PowerShell, na raiz do projeto:

```powershell
npm install
npm test
```

## Gerar resultados dos testes (JSON)

Crie o arquivo `jest-report.json` com o resumo dos testes para inclusão no relatório:

```powershell
npx jest --json --outputFile=jest-report.json
```

## Preparar o arquivo de relatório (report.md)

Crie `report.md` a partir do `README.md` e inclua os resultados dos testes:

```powershell
Get-Content README.md | Set-Content report.md
Add-Content report.md "`n## Resultados dos testes`n"
Add-Content report.md '```json'
Get-Content jest-report.json | ForEach-Object { Add-Content report.md $_ }
Add-Content report.md '```'
Add-Content report.md "`n## Anexos`n- Link do repositório público: <cole o link aqui>`n- Artefatos do workflow: jest-report.json" 
```

Inclua também as capturas de tela do workflow do GitHub Actions demonstrando a execução com sucesso.

## Entrega

- `readme.pdf` contendo: descrição do projeto, explicação dos testes, comandos de execução e os resultados.
- Link do repositório público.
- Arquivo `jest-report.json` como evidência dos resultados dos testes.
