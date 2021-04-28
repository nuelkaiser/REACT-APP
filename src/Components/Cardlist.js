import Card from './Card';

const Cardlist = ({ Robot }) => {
    if (false) {
        throw new Error ('OOOOHH NOOO')
    }
    
    return ( 
        <div>
            { Robot.map((user, i) => {
             return (
                <Card  key={i} name={Robot[i].name} email={Robot[i].email} id={Robot[i].id} user={Robot[i].user}/>
            );
        })}
        </div>
     );
}

export default Cardlist;