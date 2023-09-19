import { categoryBlogService } from '../../services';

const getCategoryBlogList = async (req, res) => {
  const categoryList = await categoryBlogService.getCategoryBlogList();
  console.log('categoryList', categoryList);
}

const createCategoryBlogList = async (req, res) => {
  await categoryBlogService.createCategoryBlog(req.body);
  return res.status(200).json('success');
}

module.exports = {
  getCategoryBlogList,
  createCategoryBlogList
}