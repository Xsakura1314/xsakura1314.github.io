---
title: 什么是数据库?
description: 数据库的基本知识
date: 2022-07-17
category: 数据库
---

## 什么是数据库?

[数据库](https://en.wikipedia.org/wiki/Database)（Database），简称 DB，指的是一组相关数据及其组织方式。

[数据库管理系统](https://en.wikipedia.org/wiki/Database#Database_management_system)（Datebase management system），简称 DBMS，提供给终端用户、应用或着数据库本身访问和存储的数据的软件，一般来说就是专门操作管理数据库的软件。

由于数据库和数据库管理系统的密切关系，通常用术语「数据库」同时表示数据库和操作它的数据库管理系统。

## 数据库的历史

根据数据库中数据的组织结构可以分为三类数据库：

* 导航型（navigationnal）
* 关系型（relational）
* 后关系型（post-relational）

时间要追溯到 20 世纪 60 年代

这时候主要流行两种不同标准导航型的数据库 CODASYL（network model） 和 IMS（hierarchical model），它们都是通过指针(通常是物理磁盘地址)来跟踪从一个记录到另一个记录的关系。

到了 1970 年，[Edgar F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd)，一名就职与 IBM 的员工，因对 CODASYL 数据库的不满，便写下了[《A Relational Model of Data for Large Shared Data Banks》](http://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf)这篇论文，而这标志着关系型数据库的开始。

2000 年以后，为了更快的数据访问和避免繁琐的数据关系，便逐渐产生了以非关系型数据为主的这类后关系型数据库。

## 参考

1. [DataBase (Wiki)](https://en.wikipedia.org/wiki/Database)