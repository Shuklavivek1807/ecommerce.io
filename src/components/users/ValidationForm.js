const validation =(data)=>{
    let errors={};

    if(!data.title){
        errors.title='**title is required';
    }else if (data.title.length <5 || data.title.length>15){
        errors.title='**Please enter title should between 5 to 15'}
    else if (!/^[a-zA-Z]*$/g.test(data.title)) {
        errors.title="**Invalid user title, only alphabets are allowed";
    }
    if(!data.price){
        errors.price='**Price is required';
    } 
    if(!data.category){
        errors.category='**category is required';
    }
    return errors;
}
export default validation;