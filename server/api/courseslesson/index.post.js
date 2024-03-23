import CoursesModel from "~/server/models/Courses";

export default defineEventHandler(async (event) => {
  try {
    const result = await CoursesModel.find().select("kirilica");
    return result;
  } catch (err) {
    console.log(err);
  }
});
