import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  age: String,
  phone: String
});

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'student');
const postStudent = mongoose.model('student', studentSchema);

export default postStudent;



