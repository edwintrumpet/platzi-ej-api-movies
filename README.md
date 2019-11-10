## Backend de PlatziVideo

Backend del proyecto PlatziVideo de la Escuela de Javascript de PLatzi

## Instalación

```shell
npm i
```

## Scripts

- `dev`  
Corre la aplicación en modo desarrollo
- `start`  
Corre la aplicación en modo producción

## Notas

Para implementar el formateo automático en el momento de realizar un commit se utilizó el comando

```shell
npx mrm lint-staged
```

Para la construcción del archivo `.gitignore` se usó la plataforma https://www.gitignore.io/

### Deploy en Now

Instalación de now

```shell
npm i -g now
```

Lo primero que hacemos es agregar las variables de entorno, para hacerlo usamos los comandos

```shell
now secret add <nombre de la variable> <valor>
```
 Por ejemplo para agregar la variable **db-user** y el valor **admin**

 ```shell
 now secret add db-user admin
 ```

 Para hacer un despliegue local de prueba ejecutamos el comando

 ```shell
 now dev
 ```

 Para hacer el despliegue en producción ejecutamos el comando

 ```shell
 now
 ```

 Si queremos una url más amigable podemos cambiarla usando el comando

 ```shell
 now alias <url antigua> <url nueva terminada en now.sh>
 ```

 ### Generador de tokens

Se usa la aplicación https://keygen.io/ y se obtiene un WEP 256-bit key

Los API_KEY_TOKENS los genero por medio del script `seedApiKeys.js` y los extraigo de la base de datos

### Creación de proyecto en Google api para hacer autenticación en OAuth2.0

1. Vamos a la [Consola de APIs  y servicios](https://console.developers.google.com) de Google
2. Creamos un proyecto
3. En el menú lateral izquierdo seleccionamos **Pantalla de consentimiento** y en **Nombre de la aplicación** asignamos un nombre que en este caso será **Platzi videos**
4. En el menú lateral izquierdo seleccionamos **Credendials > Create credentials > OAuth client ID**
5. Nos aseguramos de elegir **Web application** como tipo de aplicación
6. Luego establecemos el nombre del cliente que en nuestro caso será **SSR server**, el **Authorized JavaScript Origins:** _http://localhost:8000_ y el **Authorized redirect URIs:** _http://localhost:8000/auth/google-oauth/callback_, después se cambiarán los valores en producción.
7. Al final copiamos **Client ID** y **Client secret** y los usamos en nuestro entorno como **GOOGLE_CLIENT_ID** y **GOOGLE_CLIENT_SECRET**
