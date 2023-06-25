# 16 ExpressJS Middleware

## Middleware

"Sebuah software yang menghubungkan software atau aplikasi lain."

1. Database
1. Web Server
1. Game Engine
1. Web Application

## Web Application

request -> middleware.route.auth[ app ] -> response

## Express Middleware

"Aplikasi Express itu sendiri sebenarnya berisi serangkaian pemanggilan fungsi middlware."

## Fungsi Middleware

"Sebuah fungsi yang memiliki akses ke object request (req), object response (res), dan fungsi middleware berikutnya (next)."

1. User-defined middleware
    - Application-level middleware
    - Router-level middleware
    - Error-handling middleware
1. Built-in middleware
1. Third-party middleware

## Built-in middleware

Secara default, ExpressJS melindungin file-file statis kita, seperti: gambar, css, javascript, sound, video, itu tidak dapat diakses secara default. Agar dapat diakses aset2 tersebut, kita harus memberitahu ke ExpressJS, kalau kita punya dir public, yang isinya file2 statis yang boleh diakses oleh siapapun.
