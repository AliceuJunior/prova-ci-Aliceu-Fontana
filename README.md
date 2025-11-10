# prova-ci-nome-sobrenome

Projeto de exemplo para a avaliação de CI com GitHub Actions.

## Conteúdo
- `src/index.js` — função simples `sum(a,b)`.
- `tests/sum.test.js` — 2 testes unitários com Jest.
- `.github/workflows/ci.yml` — workflow do GitHub Actions.

## Como rodar localmente
1. Instale Node.js (v16+ recomendado).
2. No terminal, na raiz do projeto:

```powershell
cd c:\Users\Liceu\Desktop\P2
npm install
npm test
```

Isso executa os testes com Jest. Se os testes falharem, o comando retorna exit code != 0.

## Pipeline (GitHub Actions)
O arquivo `.github/workflows/ci.yml` está configurado para rodar em:
- push na branch `main`
- pull request direcionado para `main`

Etapas do pipeline:
- Checkout do código
- Setup Node.js (v18)
- `npm install`
- `npm test -- --json --outputFile=jest-report.json` (gera `jest-report.json`)
- Upload do `jest-report.json` como artefato

Se os testes ou o build falharem, o job do GitHub Actions marcará o status como `failed`.

## Relatório
O workflow gera `jest-report.json` e faz upload como artefato chamado `jest-report`.

## Observações e próximos passos
- Para gerar um PDF de relatório final, exporte este README (ou `report.md`) para PDF contendo as saídas dos testes e o link do repositório público.
