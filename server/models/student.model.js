module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      rollNumber: String
      
    }
    
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Student = mongoose.model("student", schema);
  return Student;
};
