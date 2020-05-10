import React from 'react';
import ProjectItem from './projects/ProjectItem';
import {Link} from 'react-router-dom';
class Dashboard extends React.Component{
    render()
    {
        return(
        <div className= "projects">
         <div className= "container">
          <div className= "row">
           <div className= "col-md-12">
              <h1 className="display-4 text-center">Hello Welcome to Dashboard</h1> 
                <br/>  
                <Link to="ProjectForm.html">
                    Create a Project
                </Link>
                <br/>
                <hr/>
             <ProjectItem/>
            </div>
          </div> 
         </div>
        </div>
        );
    }
}
export default Dashboard;