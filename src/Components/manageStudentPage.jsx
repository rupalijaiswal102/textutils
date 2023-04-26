import React, { Component } from "react";
import StudentPage from "./studentPage";
class ManageStudentPage extends Component{

    state={
        students:[
            {name:"Bruce",mname:"",lname:"Banner",division:"A",class1:"VI-A",rollno:"12",
          add1:"Sector-6",add2:"52",landmark:"Delhi",city:"Noida",pincode:"110001"
        }
        ],
         view:0,
        editIndex:-1,
        view1:0,
        viewIndex:-1,
        errors:{}
       }

    handleSubmit=async(student)=>{
        let s1={...this.state}
        const {name, mname, lname,division,class1,
            rollno, add1, add2,landmark,city,pincode,}=student
        
        const res=await fetch("https://reactloginform-9ad84-default-rtdb.firebaseio.com/reactloginform.json",
       { method : "post",
         headers:{
            "Content-Type":"application/json",
         },
         body:JSON.stringify({
            name:name,
            mname,
            lname,
            division,class1,
            rollno,
            add1,
            add2,landmark,city,pincode,


         }),
    }
        );
        if(this.validate(student)){
            s1.editIndex>=0
            ?(s1.students[s1.editIndex]=student)
            :s1.students.push(student)
            s1.view=1;
            s1.editIndex=-1
           }
       else{
        s1.view=0;
        student=student
        
       }

        this.setState(s1)
      }

    addtoStudent=()=>{
        let s1={...this.state}
        s1.view=0
        s1.editIndex=-1
        this.setState(s1)
    }
    ManageStudent=()=>{
        let s1={...this.state}
        s1.view=1
        this.setState(s1)
    }
    validate=(student)=>{
        let s1={...this.state}
        s1.errors.name=student.name==''?'First Name is mandatory':''
        s1.errors.lname=student.lname==''?'last Name is mandatory':''
        s1.errors.class1=student.class1?'':'Select the class'
        s1.errors.division=student.division?'':'Select the Division'
        s1.errors.pincode=student.pincode==''?'PinCode is mandatory':''
        s1.errors.rollno=student.rollno==''?'Roll No is mandatory':''
       console.log(s1.errors)
       this.setState(s1)
       return !(s1.errors.name)
        
      }
    viewStuDetails=(index)=>{
        let s1={...this.state}
        
         s1.view1=1
        s1.viewIndex=index
        this.setState(s1)

    }
    closeDetails=(index)=>{
        let s1={...this.state}
        
        s1.view1=0
       s1.viewIndex=index
       this.setState(s1)

    }
    
    deleteStu=(index)=>{
        let s1={...this.state}
        alert("Are you sure you want to delete this item")
        s1.students.splice(index,1)
        this.setState(s1)
    }
    editStu=(index)=>{
        console.log(index)
        let s1={...this.state}
        s1.view=0
        s1.editIndex=index
          this.setState(s1)
    }
    showStudentTable=()=>{
           const{students,view1,viewIndex}=this.state
        return((
            <div><div className="row border bg-danger text-white" >
                    <div className="col-2" style={{marginTop:"2%",marginBottom:"2%"}}>Name</div>
                    <div className="col-1" style={{marginTop:"2%",marginBottom:"2%"}}>Class</div>
                    <div className="col-1" style={{marginTop:"2%",marginBottom:"2%"}}>Roll No</div>
                    {view1==1?(<React.Fragment>
                    <div className="col-2" style={{marginTop:"2%",marginBottom:"2%"}}>Devision</div>
                    <div className="col-2" style={{marginTop:"2%",marginBottom:"2%"}}>Address</div>
        <div className="col-1" style={{marginTop:"2%",marginBottom:"2%"}}>City</div>
                    <div className="col-1" style={{marginTop:"2%",marginBottom:"2%"}}>PinCode</div>
                    </React.Fragment>):""}
                    <div className="col-2" style={{marginTop:"2%",marginBottom:"2%"}}>View/Edit/Delete</div>
                </div>
                {students.map((s,index)=>(
                <div className="row border">
                    <div className="col-2">{s.name + " "+s.lname}</div>
                    <div className="col-1">{s.class1}</div>
                    <div className="col-1">{s.rollno}</div>
                    {view1==1?(<React.Fragment>
                    <div className="col-2">{s.division}</div>
                    <div className="col-2">{s.add1}</div>
                    <div className="col-1">{s.city}</div>
                    <div className="col-1">{s.pincode}</div>
                    </React.Fragment>):""}
                    <div className="col-2">
                        {view1==0?(
                    <i className="fa fa-eye" style={{color:"#FF0000",marginLeft:"10%"}}
                    onClick={()=>this.viewStuDetails(index)}></i>):
                    (<i className="fa fa-eye-slash" style={{color:"#FF0000",marginLeft:"10%"}}
                    onClick={()=>this.closeDetails(index)}></i>)}
                 <i className="fa fa-edit" style={{color:"#FF0000",marginLeft:"15%"}}
                 onClick={()=>this.editStu(index)}></i>
                    <i className="fa fa-trash" style={{color:"#FF0000",marginLeft:"15%"}}
                    onClick={()=>this.deleteStu(index)}></i></div>
                </div>
            ))}
            </div>))
    }


    render(){
 const student= {name:'',mname:"",lname:"",division:"",class1:"",rollno:"",
        add1:"",add2:"",landmark:"",city:"",pincode:""}
       let {students,view,editIndex,errors} =this.state
     return(
          <div className="container border" style={{background:"#FFF4F3"}}>
                <div className="row">
                    <div className="col-2">LOGO</div>
                    <div className="col-4 btn" style={{marginLeft:"70%"}}>
                        
                        <i class="fa fa-user"></i> 
                        username@resoluteai.in 
                    
                    </div>
            </div>
            <div className="row ">
                {view==0?(   <b> <div className="col-6" style={{marginLeft:"25%"}}>
                    Add Student</div></b>):(<b> <div className="col-6" style={{marginLeft:"25%"}}>
                    Manage Students</div></b>)}
                    <div className="col-6" style={{marginLeft:"80%"}}>
                        25 Jul 2022 16:10
                    </div>
            </div> 
           <div className="row">
              <div className="col-3">
              <button className="btn btn-danger m-2" onClick={()=>this.addtoStudent()} >
                   <i class="fa fa-users"></i> Add to Student
                    </button>
                    <br/>
                    <button className="btn btn-light m-2" 
                    onClick={()=>this.ManageStudent()} > 
                    <i class="fa-solid fa-slider"> </i> Managed Student
                    </button>
                    <br/>
                    <button className="btn btn-light m-2"
                    onClick={()=>this.logout()} > 
                    <i class="fa-solid fa-sign-out"> </i> Logout
                    </button>
                    </div>
                    <div className="col-9">
    {view==0
    ?(<StudentPage
       student={editIndex>=0 ?students[editIndex]:student}
        onSubmit={this.handleSubmit} errors={errors}/>)
        :this.showStudentTable()}
        </div>
           </div>
                        
        </div>

        )

    }

}
export default ManageStudentPage