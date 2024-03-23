
const GeneralForm = () => {

const handleOnClick=(e)=>{
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.email.value);
}

    
    return (
        <div>
            
        <h3>General Form</h3>

        <form onSubmit={handleOnClick} >
            <input type="text" name="name" /><br />
            <input type="text" name="email" /> <br />
            <input type="submit" value="submit" /> <br />
        </form>

        </div>
    );
};

export default GeneralForm;