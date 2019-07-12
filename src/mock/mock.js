// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index+url + ".*"', 'get', produceNewsData);
const lunboData = function() {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            // title: Random.csentence(5, 30), //  Random.csentence( min, max )
            img_url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
           // date: Random.date() + ' ' + Random.time(),
            // click:i+10,
             id:i,
            // add_time:Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            // zhaiyao:Random.csentence(5, 30)                                        
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
Mock.mock(RegExp('/api/getlunbo' + ".*"), 'get',lunboData); //要传递参数，url伊东遥使用正则表达式方式。

const newslist = function() {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            img_url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
           // date: Random.date() + ' ' + Random.time(),
            click:i+10,
            id:i,
            add_time:Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            zhaiyao:Random.csentence(5, 30)               //指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
Mock.mock(RegExp('/api/getnewslist' + ".*"), 'get',newslist); 

//新闻详情数据
const newsinfo = function() {
    let data = [];
    for (let i = 0; i < 50; i++) {
     
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            img_url: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
           // date: Random.date() + ' ' + Random.time(),
            click:i+10,
            id:i,
            add_time:Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            content: Random.csentence(300, 500)
             
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
Mock.mock(RegExp('/api/getnew' + ".*"), 'get',newsinfo); //要传递参数，url伊东遥使用正则表达式方式。

//各页面评论数据
const comments = function() {
    let data = [];
    for (let i = 0; i < 10; i++) {
     
        let newArticleObject = {
            louceng:i+1,
            user: Random.cname(),           
            click:i+10,
            id:i,
            add_time:Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符        
            comment:Random.csentence(10, 120)
        }
        data.push(newArticleObject)
    }
 
    return {
        data: data
    }
}
Mock.mock(RegExp('/api/getcomments' + ".*"), 'get',comments); //要传递参数，url伊东遥使用正则表达式方式。

//添加评论数据，返回新评论给客户端
const recomments = function() {
    let data ={
        louceng:1,
        user: Random.cname(),           
        click:10,
        id:1,
        add_time:Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符        
        comment:Random.csentence(10, 120)
    }
    
 
    return {
        data: data
    }
}
Mock.mock(RegExp('/api/postcomment' + ".*"), 'post',recomments); //要传递参数，url伊东遥使用正则表达式方式。