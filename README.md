# Chain Compare

Chain compare is a project that collects technical information about blockchains such as time to finality,
blocksize, consensus algorithm or the smart contract languages. It was created because this information
is sometimes really hard to find requires some research.  

## Add new chain

If you want to add a new chain, take the template file in _data/_template.json, create a copy of it, fill
in all the information and create a pull request. The image of the chain must be in app/src/assets/logos/.

## Run and update

within app:

```bash
npm install
npm run updata
ng serve
```