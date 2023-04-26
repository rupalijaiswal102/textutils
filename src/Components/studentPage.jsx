import React, { Component } from "react";
class StudentPage extends Component{
    state={

      student:this.props.student,
      classes:["Ist","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],
      divisions:["A","B","C","D","E"],

    }
    handelChange=(e)=>{
        console.log(e.currentTarget);
        let s1={...this.state}
 s1.student[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1)
    }
    handleSubmit=(e)=>{
         console.log("Handle Submit",this.state.student)
             this.props.onSubmit(this.state.student)}
       
    
   render(){
    const {classes,divisions}=this.state
    const{errors=''}=this.props
    let {name,mname,lname, class1, rollno,division,add1,add2,city,pincode,landmark}=
   this.state.student
   console.log(errors.name)
       
      return(
            <div> 
                <div className="row">
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="First Name"
               

                        onChange={this.handelChange}
                        name="name"
                        value={name}

        
                        required="required"

                        />
                {errors?(<span class="text-danger">{errors.name}</span>):''}
                        
                    </div>
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Middle Name"
                        onChange={this.handelChange}
                        name="mname"
                        value={mname}/>
                    </div>
                    <div className="col-4 form-group" >
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Enter Last Name"
                        onChange={this.handelChange}
                        name="lname"
                        value={lname}
                        required="required"/>
                         {errors?(<span class="text-danger">{errors.lname}</span>):''}
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-4 form-group">
                
              <select className="form-control" 
              name="class1"
              value={class1}
              onChange={this.handelChange}
                   >
                <option  value="">
                   Select the Class
                </option>
                {classes.map((c1)=>(
                    <option>{c1}</option>
                ))}
          </select>
          {errors?(<span class="text-danger">{errors.class1}</span>):''}
                        
              </div>
                    <div className=" col-4 form-group">

              <select className="form-control" 
              name="division"
              value={division}
              onChange={this.handelChange}
             >
                <option value="">
                   Select the Division 
                </option>
                {divisions.map((d1)=>(
                    <option>{d1}</option>
                ))}
          </select>
          {errors?(<span class="text-danger">{errors.division}</span>):''}
                        
              </div>
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Enter Roll Number in Digits"
                        onChange={this.handelChange}
                        name="rollno"
                        value={rollno}
                        
                        minLength="2 "
                   />
                   
                   {errors?(<span class="text-danger">{errors.rollno}</span>):''}   
                    </div>
                    </div>
                    <br/>
                <br/>
                <div className="row">
                    <div className="col-6 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Adresss Line 1"
                        name="add1"
                        value={add1}
                        onChange={this.handelChange}/>
                    </div>
                    <div className="col-6 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Adresss Line 2"
                        name="add2"
                        value={add2}
                        onChange={this.handelChange}/>
                    </div>
                    
                </div>
                <br/>
                <div className="row">
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Landmark"
                        name="landmark"
                        value={landmark}
                        onChange={this.handelChange}/>
                    </div>
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={this.handelChange}/>
                    </div>
                    <div className="col-4 form-group">
                        <input
                        type="text"
                        className="form-control" 
                        placeholder="Pincode"
                        name="pincode"
                        value={pincode}
                        onChange={this.handelChange}/>
                        {errors?(<span class="text-danger">{errors.pincode}</span>):''}
                  
                    </div>
                          
                </div>

        
                <div style={{marginLeft:"30%",marginBottom:"4%"}}>
              <button className="btn btn-danger m-2 text-center"
              onClick={()=>this.handleSubmit()}> Add to Student</button>
              </div>
        
            </div>
        )
    }

}
export default StudentPage