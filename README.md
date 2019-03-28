# projeto-angular
1 - Instale o Node<br>
2 - Baixe o Repositório<br>
3 - Rode o comando (npm install -g @angular/cli) para instalar o angular<br>
4 - Rode o comando (npm install -g typescript) para instalar o Typescript
ng new nome-projeto
cd nome-projeto
ng serve

//COMPONENT
ng g c nome-component //Criando component
<ul> <li *ngFor="let curso of cursos">{{curso}}</li> </ul> // FOR EM LISTA DENTRO DO COMPONENT.HTML


//MODULO
// exports:[ NomeComponent ] para dar visibilidade do component ao appModule
ng g m nome-modulo // Criando novo modulo

//tScript
tsc main.ts //TRANSPILAR para TS para JS
	
  nomePortal: string;
  cursos: string[] = ['Java','JS','Angular'];
  constructor() { 
    this.nomePortal = 'hhtp://rumenik.angular';
  }
  
//SERVICO
ng g s nome-servico
ng g s nome-component/nome-servico
