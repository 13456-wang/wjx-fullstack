//良好代码 写好注释
import {PostModel} from './post.model';

export const createPost =(post:PostModel) => {
    const statement = `
    INSERT INTO post
    SET ? 
    `

}