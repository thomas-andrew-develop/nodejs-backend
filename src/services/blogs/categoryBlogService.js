import { categoryBlogModel } from '../../models';

const getCategoryBlogList = () => {
  console.log(34534543);
}

const createCategoryBlog = async (data) => {
  try {
    const { title, slug, description } = data
    await categoryBlogModel.create({
      title,
      slug,
      description
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategoryBlogList,
  createCategoryBlog
}