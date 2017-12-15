# calcAPI
Uma _API_ que retorna resultados de operações matemáticas;
## Operações
As operações são dadas na url no seguinte formato:
```
domain.com/{operação}/{primeiro_valor}/{segundo_valor}
```
e elas são:
### Soma
A soma pode ser acionada pelas seguintes strings:
+ ```+```
+ ```soma```
+ ```plus```
+ ```add```
### Subtração
A soma pode ser acionada pelos seguintes nomes:
+ ```-```
+ ```sub```
+ ```menos```
+ ```minus```
+ ```less```
### Multiplicação
A soma pode ser acionada pelos seguintes nomes:
+ ```*```
+ ```x```
+ ```mul```
+ ```mult```
+ ```times```
### Divisão
A soma pode ser acionada pelos seguintes nomes:
+ ```:```
+ ```div```
+ ```take```
+ ```split```
### Raiz
A soma pode ser acionada pelos seguintes nomes:
+ ```√```
+ ```root```
+ ```raiz```
### Esponencial
A soma pode ser acionada pelos seguintes nomes:
+ ```^```
+ ```exp```
+ ```elev```

## Exemplos
#### Soma
url = ``` https://calculation-api.herokuapp.com/+/2/3 ```
```json
{
 "result": 5
}
```
#### Divisão
url = ``` https://calculation-api.herokuapp.com/:/52.33/7.5 ```
```json
{
 "result": 6.977333333333333
}
```
#### Raiz
url = ``` https://calculation-api.herokuapp.com/√/27/3 ```
```json
{
 "result": 3
}
```
## Troubleshooting
### Valores longos
Caso um dos valores obter um valor acima de 16 algarismos, a API irá arredondar-lo.
Se realmente for necessário obter um valor mais apurado, insira a rota ```long/```no início da URI
#### Exemplo
url = ``` https://calculation-api.herokuapp.com/long/:/29289984423798437.04383428093/942303293099948028324932.290044 ```
```json
{
 "wrn": "The result is a string. You shold parse it.",
 "result": "3.108339389056e-8"3.5.2
}
```
Se não se importar com o arredondamento, você pode mandar os valores longos, porém a api vai retornar um warning sobre a situação.
#### Exemplo
url = ``` https://calculation-api.herokuapp.com/:/29289984423798437.04383428093/942303293099948028324932.290044 ```
```json
{
 "wrn": "Params given are too high, the result is not going to be too accurate",
 "result": 3.1083393890561e-8
}
```
### NaN
Caso um dos valores dados começar com um caractere não numérico, a API vai retornar um error. Isso conta para a ```long/``` também.
#### Exemplo
url = ``` https://calculation-api.herokuapp.com/times/qiA7299/22 ```
```json
{
 "err": "Params given are not number type."
}
```
Mas, se começar com um número, a API só processará ele até encontrar um não número.
#### Exemplo
url = ``` https://calculation-api.herokuapp.com/plus/9d333/11pp22 ```
```json
{
 "result": 20
}
```

# Deploy
## git clone
Baixe o projeto com
```sh
git clone https://github.com/wilkerHop/calcAPI.git
```
## npm
Você vai precisar do Nodejs v6.11.4^ e do npm v3.5.2^ para rodar a API. Depois de instalados, dentro da pasta do projeto escreva
```sh
npm install
```
## npm start
Pronto!

Você agora tem a API instalada no seu PC. Agora, um
```
npm start
```
ou
```
node app
```
e ela está rodando no seu localhost na porta 3000 ou na sua plataforma as-a-service, como o Heroku, já setada para a porta padrão.


# #todo

+ Aceitar nth valores;
+ tratar erros lançados quando resultados maiores que o ```long/``` pode suportar;
+ Enviar um resultado em number na rota ```long/{calc}```;
+ Add métodos de machine learning.

###### pas