# agenda

<div>
    <h2>Documentação do Projeto</h2>
<p>Foram utilizadas as seguintes tecnologias:

	<ul>
		<li> NPM</li>
		<li> Bower</li>
		<li> Grunt</li>
		<li> AngularJs</li>
		<li> Bootstrap</li>
		<li> Karma</li>
		<li> Jasmine</li>
	</ul>

	Além dessas utilizei o <b>Yeoman</b> para gerar o código padronizado.

</p>

<h3>Instruções de Instalação</h3>
<p>

Após baixar o projeto executar:
	<pre><code>npm install
</code></pre>
<pre><code>bower install
</code></pre>

<pre><code>npm install karma-jasmine --save-dev
</code></pre>

Para rodar:
<pre><code>grunt serve
</code></pre>

Para rodar teste:
<pre><code>grunt test
</code></pre>
</p>

<h3>Estrutura do projeto</h3>

<p>
	<p><img src="images/atree.png" alt="A sample project file tree using these AngularJS tools will look like this."></p>
</p>


<h3>Dependências</h3>

<p>package.json
	<p>
		{
  "name": "agenda",
  "private": true,
  "devDependencies": {
    "autoprefixer-core": "^5.2.1",
    "grunt": "^0.4.5",
    "grunt-angular-templates": "^0.5.7",
    "grunt-concurrent": "^1.0.0",
    "grunt-contrib-clean": "^0.6.0",
    "grunt-contrib-concat": "^0.5.0",
    "grunt-contrib-connect": "^0.9.0",
    "grunt-contrib-copy": "^0.7.0",
    "grunt-contrib-cssmin": "^1.0.2",
    "grunt-contrib-htmlmin": "^0.4.0",
    "grunt-contrib-imagemin": "^1.0.0",
    "grunt-contrib-jshint": "^0.11.0",
    "grunt-contrib-uglify": "^0.7.0",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-filerev": "^2.1.2",
    "grunt-google-cdn": "^0.4.3",
    "grunt-jscs": "^1.8.0",
    "grunt-karma": "^0.12.2",
    "grunt-newer": "^1.1.0",
    "grunt-ng-annotate": "^0.9.2",
    "grunt-postcss": "^0.5.5",
    "grunt-svgmin": "^2.0.0",
    "grunt-usemin": "^3.0.0",
    "grunt-wiredep": "^2.0.0",
    "jasmine-core": "^2.6.1",
    "jit-grunt": "^0.9.1",
    "jshint-stylish": "^1.0.0",
    "karma": "^0.13",
    "karma-chrome-launcher": "^2.1.1",
    "karma-jasmine": "^1.1.0",
    "karma-phantomjs-launcher": "^1.0.4",
    "phantomjs-prebuilt": "^2.1.14",
    "time-grunt": "^1.0.0"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "test": "karma start test\\karma.conf.js"
  }
}

	</p>
</p>
<h3>Decisões do projeto</h3>
<p>
	Criei a pasta service e fiz o serviço que obtém o jSon gerado no mocky.

	Criei um html para cadastrar, editar e visualizar contatos.
</p>

</div>