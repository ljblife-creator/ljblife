import { readdir } from 'fs/promises';
import { resolve } from 'path';

export default async function handler(req, res) {
  try {
    // 读取项目根目录所有文件
    const rootPath = resolve('./');
    const allFiles = await readdir(rootPath);
    // 只筛选 .html 文件，排除index.html自身
    const htmlList = allFiles.filter(file => 
      file.endsWith('.html') && file !== 'index.html'
    );
    res.status(200).json(htmlList);
  } catch (err) {
    res.status(500).json([]);
  }
}
