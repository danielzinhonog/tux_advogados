Instalação e inicialização do Angular:
	Passo 01: npm install -g @angular/cli;
  	Passo 02: Verificar a versão do angular (ng version);
  	Passo 03: Criar um projeto com angular (ng new nome_projeto);
  	Passo 04: Acessar a pasta do projeto (cd nome_projeto);
  	Passo 05: Iniciar o projeto (ng serve --o);

Para criar um novo componente:
	Passo 01: Parar o projeto (ctrl+c);
	Passo 02: Dentro da pasta do projeto executar: ng generate component nome-component (forma resumida: ng g c nome-component);
  	Passo 03: Subir o projeto novamente: ng serve -o (dentro da pasta do projeto);

Istalação do Bootstrap no projeto: 
  	Passo 01: Acessar a pasta do seu projeto ANGULAR pelo terminal: (angular1);
  	Passo 02: Executar pelo o seguinte comando: npm install bootstrap --save;
  	Passo 03: Adicionar dentro do arquivo angular.json Adicionar a seguinte linha dentro da opção style "./node_modules/bootstrap/dist/css/bootstrap.min.css" e "scripts":  "node_modules/bootstrap/dist/js/bootstrap.min.js";
  	Passo 04: Reiniciar o servidor Angular;
