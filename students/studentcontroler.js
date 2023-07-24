import Student from '../model/student.js';

// Save data of the user in database
export const addStudent = async (request, response) => {
  const student = request.body;
  
  const newStudent= new Student(student);
  try{
      await newStudent.save();
      response.status(201).json(newStudent);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}
export const getStudents = async (request, response) => {
  
  try{
    const students= await Student.find({});
     response.status(200).json(students);
  } catch (error){
      response.status(404).json({ message: error.message});     
  }
}

