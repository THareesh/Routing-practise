import React from 'react';

class dashboard extends React.Component{
     state = {
        employees:[]
     }
    componentDidMount(){
        fetch(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(result =>  result.json())
        .then(items => {
            this.setState({employees:items})
        })
     }
    render(){
        return(
            <div className="container">
            <div className="row">

           { 
               this.state.employees.map((value,index)=>{
            console.log(value)
            return(
                <div className="col-4">
                <div className="card" style={{width: "18rem",margin:"auto"}}>
               <img className="card-img-top" src={require('./../Images/google.png')} alt="Card image cap" />
               <div className="card-body">
              <h5 className="card-title">{value.employee_name}</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">{value.id}</a>
        </div>
      </div>
      </div>
            )
        })
        }
                
      </div>
      </div>

        );

            
          
}
}
export default dashboard;