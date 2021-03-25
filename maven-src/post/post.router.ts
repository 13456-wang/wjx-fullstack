//文章模块路由
import express from 'express'
import * as postController from './post.controller'
const router = express.Router();
//获得GET

// 创建内容
router.post('/posts',postController.store)

//获取文章列表
// router.post('/post')
export default router;