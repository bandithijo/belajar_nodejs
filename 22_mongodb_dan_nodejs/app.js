const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'bandithijo';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal!');
    }

    // console.log('Koneksi berhasil!');

    // pilih database
    const db = client.db(dbName);

    // menambahkan satu data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Reza',
    //         email: 'reza@gmail.com'
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan data!');
    //         }
    //
    //         console.log(result);
    //     }
    // );

    // menambahkan lebih dari satu data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         { nama: 'Devika', email: 'devika@gmail.com' },
    //         { nama: 'Devina', email: 'devina@gmail.com' },
    //         { nama: 'Devila', email: 'devila@gmail.com' },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Data gagal ditambahkan!');
    //         }
    //
    //         console.log(result);
    //     }
    // );

    // menampilkan semua data mahasiswa
    // console.log(
    //     db.collection('mahasiswa').find().toArray((error, result) => {
    //         console.log(result)
    //     })
    // );

    // menampilkan data berdasarkan kriteria
    console.log(
        db.collection('mahasiswa')
        // .find({ nama: 'Rizqi Nur Assyaufi' })
        .find({ _id: ObjectId("64a1bbb7d55003df6f357aba") })
        .toArray((error, result) => {
            console.log(result);
        })
    );

    // mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectId("64a1bbb7d55003df6f357abb")
    //     },
    //     {
    //         $set: {
    //             nama: 'Devila (update 2)',
    //             email: 'devila@yahoo.com'
    //         }
    //     }
    // );
    //
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // mengubah data lebih dari satu, berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Devina'
    //     },
    //     {
    //         $set: {
    //             nama: 'Devina (update all)'
    //         }
    //     }
    // );

    // menghapus satu data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectId('64a1bbb7d55003df6f357abb')
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // menghapus lebih dari satu data
    // db.collection('mahasiswa').deleteMany(
    //     {
    //         nama: 'Devika'
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });
});
