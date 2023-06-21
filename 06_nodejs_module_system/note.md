# 06 nodejs module system

## modules?

"Sekumpulan code yang dapat digunakan kembali, dengan antarmuka yang terdefinisi."

## node modules?

"Fungsionalitas yang simpel ataupun kompleks yang tersimpan di dalam sebuah file JavaScript, yang dapat kita gunakan kembali pada aplikasi nodejs."

## node moduels

"Setiap modu di dalam nodejs memiliki konteks-nya masing-masing, tidak bisa saling tercampur dengan modul lain pada lingkup global."

## tipe nodejs modules

1. core modules
1. local modules
1. third party modules (npm modules)

https://nodejs.org/dist/latest-v14.x/docs/api/modules.html

## require()

Fungsi require mencari modul dengan urutan sebagai berikut:

1. core modules
1. local modules, file atau direktori (./ atau ../)
1. third party modules, `node_modules` dir
