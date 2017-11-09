Simple site on nodeJS + express

Sorry for mistakes. It is study veersion. I'm try it make good.
Простите за плохое описание, это пробная версия, я только учусь

We need Node + npm
Нужно установить node и npm


выполнить команду npm init : она задаст вам ряд вопросов и сгенерирует package.json
(на одно предупреждение меньше)


Install express
Установка express

npm install --save express

Make gitignore file
создание файла, который игнорирует в гите сам экспресс и модули

-------------------------------------------------------
.gitignore :
# Игнорировать установленные npm пакеты:
node_modules
# Поместите сюда любые другие файлы, которые вы не 
# хотите вносить,такие как .DS_Store (OSX), *.bak, etc.

-------------------------------------------------------

We have server om http://localhost:3000

Наш сервер находится по адресу http://localhost:3000
