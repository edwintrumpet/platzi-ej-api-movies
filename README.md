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
 