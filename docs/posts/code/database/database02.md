---
title: NoSQL
description: NoSQL 的基本知识
date: 2022-07-18
category: 数据库
---

## 什么是 NoSQL

[NoSQL](https://en.wikipedia.org/wiki/NoSQL) 全称应该是「Non-SQL DataBase」或者「non-relational DataBase」，这两种解释方式也表示对 NoSQL 两种不同的看法。non-relational DataBase，即非关系型数据库，与关系型数据库相对，采用**表关系**以外的方式组织和管理数据。non-SQL，有时也称为 「Not only SQL」，这种观点认为数据库的管理方式不仅仅采用 SQL。

## NoSQL 的历史

虽然 NoSQL 数据库早在 20 世纪 60 年代末就已经出现，但是 NoSQL 这个术语在 1998 年才缓缓到来，Carlo Strozzi 将他的轻量的数据库命名为 [Strozzi NoSQL](https://en.wikipedia.org/wiki/Strozzi_NoSQL_(RDBMS))，这个数据库使用的 shell 管理接口的而不是 SQL（Structured Query Language），但是数据库本身还是关系型的。

时间到了 2009 年，Johan Oskarsson 组织了一次关于「[开源、分布式、非关系型数据库](https://web.archive.org/web/20110710205509/http://nosql.eventbrite.com/)」的聚会，会议的名称为 NOSQL。

## NoSQL 数据库的类型

NoSQL 按照数据的存储类型划分，通常分为四种：

* Key-Value store（键值存储）
* BigTable store（BigTable 存储）
* Document store（文档存储）
* Graph（图）

### Key-Value store

Key-Value store，记为 KV（Key，Value），也叫做键值存储，采用关联数组（ associative array，也叫做 map 或者 dictionary）作为基本的数据模型。

键值模型是非常简单的数据模型，但是能够提高丰富的数据支持。每一个 Key 值对应着一个 Value 值。Key 值是无结构的二进制码或者纯字符串，Value 可以是任意类型的数据值。可以根据 Key 值来存储和提取 Value 值，但是 Key 值需要相应的解析才能访问 Value 值。

### BigTable store

> BigTable store，又称 Columns Oriented store，能够支持结构化的数据，包括列、列簇、时间戳以及版本控制等元数据的存储。该数据模型的特点是列簇式，即按列存储，每一行数据的各项被存储在不同的列中，这些列的集合被称作列簇。

### Document store

Document store，文档存储，核心是文档，其存储的值通过某些标准格式或者编码来封装和编码数据（或数据），常用的编码格式有 XML、YAML、JSON 等。文档可以通过字段名进行索引。

### Graph

Graph，图，记为 G（V，E），V 为节点（node）的集合，每个节点有若干属性，E 为便（edge）的集合，也可以表示若干属性。支持图结构的各种基本算法。图数据库可以方便的表示数据间的连接关系，例如社会关系、公共交通连接、线路图等。

## 参考

1. [NoSQL (Wiki)](https://en.wikipedia.org/wiki/NoSQL)
2. 数据库系统概论(第 5 版 王珊、萨师煊编著)