# Como empezar a compilar con SCSS

1. Abrir la consola en esta carpeta de backup o nueva con ctrl+ñ
    a. npm install nodemon node-sass
    b. npm init // Metralleta de enter (10 enters)

2. Abrir el archivo package.json y editarlo
    a. A continuación de && exit 1" colocar una , presionar enter
    y pegar el siguiente texto:

"build-css": "node-sass --include-path scss scss/main.scss css/style.css",
"watch-css": "nodemon -e scss -x \"npm run build-css\""

3. Crear las carpetas con sus respectivos archivos
    a. scss/main.scss
    b. css/style.css

4. En la consola correr el comando
    a. npm run build-css // Por única vez
    b. npm run watch-css      

5. Cada vez que se quiera seguir compilando en SASS
    a. abrir la consola con ctrl+ñ
    b. npm run watch-css

//FIN   

# Pasos para usar GIT:

1- crear una terminar aparte/nueva a la que nombrar GIT

2- Inicializar git con el comando:
    a. git init

3- Cambiar los estados (de carga y guardado de pasos):
    a. git add . // agrega el nuevo contenido
    b. git commit -m "texto del paso realizado"  //carga los pasos realizados 

4- Se crea el repositorio en github y asociarlo con:
    a. git branch -M main
    b. agrego el origen= git remote add origin....
    c. hacer el primer push = git push -u origin main //solo una vez y en repositorios nuevos

5- Los siguientes son repetitivos:
    a.a. git add .      // agrega el nuevo contenido
    b. git commit -m "texto del paso realizado"
    c. git push         //sube el contenido al repositorio

    git add .
    git commit -m "Mensaje"
    git push

6- Si en cualquier momento quiero chequear el estado de mi terminal git:
    a. git status //me confirma el estado

# Crear el archivo gitignore:
    a. Se le pasa el nombre de la carpeta y archivos que quiero que ignore
    /node_modules   //nombre carpeta
    *.json //para todos los archivos json



# crear un repositorio GITHub y asociarlo:
git init
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main
