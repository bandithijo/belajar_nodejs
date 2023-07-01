# 21 instalasi dan konfigurasi mongodb

## Mongosh

https://www.mongodb.com/docs/mongodb-shell/reference/methods/#std-label-mdb-shell-methods

### Untuk melihat database yang tersedia

```
> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
```

### Untuk membuat database baru

Perintah `use` untuk menggunakan database, kalau ada maka database tersebut dipakai, kalau tidak ada, maka database tersebut dibuat dulu.

```
> use bandithijo
switched to db bandithijo
```

Prompt akan berpindah ke `bandithijo`, mengindikasikan sudah berada pada database `bandithijo`.

```
bandithijo> _
```

### Membuat collection baru

Misal, mau membuat collection dengan nama `mahasiswa`.

```
bandithijo> db.createCollection('mahasiswa')
{ ok: 1 }
```

### Untuk melihat daftar collections

```
bandithijo> show collections
mahasiswa
```

### Untuk memasukkan satu data baru

```
bandithijo> db.mahasiswa.insertOne({nama: 'Rizqi Nur Assyaufi', email: 'rizqiassyaufi@gmail.com'})
{
  acknowledged: true,
  insertedId: ObjectId("64a081d17af212f65cb1a8c7")
}
```

### Untuk melihat isi collection

```
bandithijo> db.mahasiswa.find()
[
  {
    _id: ObjectId("64a081d17af212f65cb1a8c7"),
    nama: 'Rizqi Nur Assyaufi',
    email: 'rizqiassyaufi@gmail.com'
  }
]
```

### Untuk memasukkan lebih dari satu

```
bandithijo> db.mahasiswa.insertMany([{ nama: 'Dody', email: 'dody@gmail.com'}, { nama: 'Erik', email: 'erik@gmail.com'}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64a083817af212f65cb1a8c8"),
    '1': ObjectId("64a083817af212f65cb1a8c9")
  }
}
```
