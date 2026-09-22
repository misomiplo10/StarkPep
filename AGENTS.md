# Stark Peptides project workflow

- After every completed website change, sync the changed production files to `misomiplo10/StarkPep` on the `main` branch through the connected GitHub integration.
- Keep `dist/` as the deployable Vercel output and preserve `vercel.json` with `outputDirectory` set to `dist`.
- Wait for the Vercel status on the resulting GitHub commit, then verify `https://stark-pep.vercel.app/` before reporting completion.
- Do not upload `work/`, temporary files, or source artwork unless the user explicitly requests it.
