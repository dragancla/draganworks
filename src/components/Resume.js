import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, index) => {
                  return(
                    <div key={index} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                            <b>{item.Specialization}</b>
                            <span> → </span> 
                            <em className="date">{item.DateOfStarting} - {item.DateOfLeaving}</em>
                          </p>

                          <div className="clients"> 
                            {
                              item.clients && item.clients.map((client) => {
                                return (
                                  <div key={client.id}>
                                    <h4>{client.name}</h4>
                                    <h6>Tech:</h6>
                                    {
                                      client.tech && client.tech.map((tech, index) => {
                                        return(<li key={index}>{tech}</li>)
                                      })
                                    }
                                    <h6>Focus:</h6>
                                    {
                                      client.focus && client.focus.map((focus, index) => {
                                        return(<li key={index}>{focus}</li>)
                                      })
                                    }
                                  </div>
                                )
                              })
                            }
                          </div>

                          <ul className="achievements">
                            {
                              item.Achievements && item.Achievements.map((achievement, index) => {
                                return(<li key={index}>{achievement}</li>)
                              })
                            }
                          </ul>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
         <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item, index)=>{
                return(
                  <div key={index} className="row item">
                    <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          <b>{item.specialization}</b>
                          <span> → </span> <em className="date">{item.DateOfStarting} - {item.DateOfPassing}</em>
                        </p>
                        <p>
                        {item.Achievements}
                        </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}