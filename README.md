# Hexlet tests and linter status:
[![Actions Status](https://github.com/Marina093/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Marina093/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/76506b906eeaaa2fa5ad/maintainability)](https://codeclimate.com/github/Marina093/frontend-project-44/maintainability) 

<h1 align="center">"Игры разума"</h1>
<p>Приложение, состоящее из пяти простых консольных игр, основанных на математической логике.</p> 
<p>Каждая игра начинается со знакомства, далее перед игроком ставится задача-вопрос.</p>
<p>Неверный ответ приводит к завершению игры, верный дает возможность перейти к следующей задаче.</p>
<p>Всего в игре три раунда.</p>

## Игры:
<ul>
 <li><b>brain-even.</b> Проверка на чётность.</li>
 <li><b>brain-calc.</b> Калькулятор.</li>
 <li><b>brain-gcd.</b> Hаибольший общий делитель (НОД).</li>
 <li><b>brain-progression.</b> Арифметическая прогрессия.</li>
 <li><b>brain-prime.</b> Простое ли число?</li>
</ul>

## Инструкция по установке и запуску:

  <p>Игры запускаются в Ubuntu или Linux.</p>
  <p>Установите Node.js не ниже 13 версии в систему глобально.</p>
  
  ```properties
  sudo apt-get install curl
  curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt install -y nodejs
  ```
  
  <p>Проверьте версию установленного node <code>node --version</code></p>
  <p>Инициализируйте npm-пакет внутри корневой директории <code>npm init</code></p>
  <p>Проверьте версию <code>npm --version</code></p>
  <p>Склонируйте репозиторий проекта локально.</p>
  
  ```properties
  git clone git@github.com:Marina093/frontend-project-44.git
  npm link
  npm ci    
  ```

## Демонстрация игр по ссылкам:

### brain-even
https://asciinema.org/a/MANMXuoVsoaCgreR56yzNtQHg
### brain-calc
https://asciinema.org/a/woz5oRGtRuzNq2P5FrNNpfWqi
### brain-gcd
https://asciinema.org/a/qvLAf1AbRM8aPbwM9IKDsORXy
### brain-progression
https://asciinema.org/a/lZrTvYuytEMzFRptC0HJABbyN
### brain-prime
https://asciinema.org/a/LT91PBQVQdkLWMdt0vSUrBJJ6 
