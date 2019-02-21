# Send SMS web

**Bemtorres**

* <https://github.com/bemtorres>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Enviar mensaje de texto (SMS) tambien emoji, mediente un API REST corriendo desde una aplicación en el celular.

La pagina envia mediante el metodo GET http://192.168.1.102:8080/v1/sms/send/?phone=987654321&message=your%20message

![Example Screenshot](https://github.com/bemtorres/send-sms-phone/blob/master/doc/portada.png?raw=true)


## Versiones

v0.2 - Envio con emoji (actual)

## Instalación

### Clonar repositorio

``` bash
# clone the repo
$ git clone https://github.com/bemtorres/send-sms-phone.git my-project

# go into app's directory
$ cd my-project

# open 
index.html
```


## Incluye

```
send-sms-phone/
├── doc/
├── src/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── vendors/
│   ├── ...
│   ├── index.html
│   └── ...
└── README.md
```
### Instrucciones

* Instalar en el celular [REST SMS Gateway](ttps://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest&hl=es_CL)

* Conectarse en la misma red

* Abrir index.html y aplicación

```
Server : 192.168.1.102 // IP que tu aplicación indica
Port   : 8080
Phone  : xxxxxxx34
Message: ........
```

* Enviar mensaje

## Desmostración

![Example Screenshot](https://github.com/bemtorres/send-sms-phone/blob/master/doc/portada.png?raw=true)
![Example Screenshot](https://github.com/bemtorres/send-sms-phone/blob/master/doc/portada.png?raw=true)
![Example Screenshot](https://github.com/bemtorres/send-sms-phone/blob/master/doc/portada.png?raw=true)
![Example Screenshot](https://github.com/bemtorres/send-sms-phone/blob/master/doc/portada.png?raw=true)


### Configuración extra
Cambiar ruta de Sprite emoji

app.js

```
//Emoji cambiar 

    assetsPath: '../src/vendors/emoji-picker/img/',

//Por la ruta correcta donde estan los Sprites
```
## Copyright and license

Code released under [the MIT license](https://opensource.org/licenses/MIT).

## Repositorio utilizado
* 💪  [CoreUI Admin Template](https://coreui.io/)
* 😍  [emoji-picker](https://github.com/OneSignal/emoji-picker)
* 📱   [REST SMS Gateway](ttps://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest&hl=es_CL)



