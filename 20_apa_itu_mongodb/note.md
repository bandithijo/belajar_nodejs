# 20 apa itu mongodb

Node + Express + DB

## MongoDB

https://www.mongodb.com

Humongous Database

https://www.mongodb.com/what-is-mongodb

MongoDB is **a document database** with the scalability and flexibility that you want with the querying and indexing that you need.

MongoDB adalah sebuah **database berbasis dokumen** yang memiliki skalabilitas dan fleksibilitas yang kita inginkan dan juga memiliki fitur query dan indexing yang kita butuhkan.

## Database Berbasis Dokumen

Salah satu tipe dari NoSQL Database

## NoSQL Database

1. Not Only Database
1. Schemaless / Flexible Schema
1. Denormalization
1. Non-relational Database
1. Unstructured, semi-structured, structured data

## Tipe NoSQL Database

1. Key-value Store
    - Redis
1. Document Based
    - MongoDB, CouchDB
1. Column-oriented Database
    - HBase, Cassandra
1. Graph Database
    - Neo4J

## Terminologi pada SQL vs NoSQL

| Fungsi             | SQL          | NoSQL      |
|--------------------|--------------|------------|
| Tempat penyimpanan | database     | database   |
| Bentuk datanya     | tabel        | collection |
| 1 data             | record       | document   |
| 1 field            | column/field | field      |

## Konsep Embedded Document (Denormalization)

```json
[
  {
    "book_id": 1,
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke"
  },
  {
    "book_id": 2,
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publisher": {
      "publisher_id": 21,
      "name": "O'Reilly Media"
    }
  }
]
```

## Kenapa MongoDB?

1. JSON (BSON)
1. JavaScript
1. MEReactN, MEVueN, MEAngularN
