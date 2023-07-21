import React,{Component} from 'react'
import {variables} from '../Variables';

export class Freelancer extends Component{

    constructor(props){
        super(props);

        this.state={
            //add data
            Freelancer:[],
            modalTitle:"",
            FreelancerId:0,
            FreelancerEmail:"",
            FreelancerUsername:"",
            FreelancerPhoneNumber:"",
            FreelancerSkillsets:"",
            FreelancerHobby:"",

            FreelancerIdFilter:"",
            FreelancerUsernameFilter:"",
            FreelancerEmailFilter:"",
            FreelancerPhoneNumberFilter:"",
            FreelancerSkillsetsFilter:"",
            FreelancersWithoutFilter:[]
        }
    }


    


    FilterFn(){
        var FreelancerIdFilter=this.state.FreelancerIdFilter;
        var FreelancerUsernameFilter = this.state.FreelancerUsernameFilter;

        var filteredData=this.state.FreelancersWithoutFilter.filter(
            function(el){
                return el. FreelancerId.toString().toLowerCase().includes(
                    FreelancerIdFilter.toString().trim().toLowerCase()
                )&&
                el. FreelancerUsername.toString().toLowerCase().includes(
                    FreelancerUsernameFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({Freelancer:filteredData});

    }

    sortResult(prop,asc){
        var sortedData=this.state.FreelancerWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        });

        this.setState({Freelancer:sortedData});
    }

  
    changeFreelancerUsername =(e)=>{
        this.setState({FreelancerUsername:e.target.value});
    }

    changeFreelancerEmail =(e)=>{
        this.setState({FreelancerEmail:e.target.value});
    }

    ChangeFreelancerPhoneNumber =(e)=>{
        this.setState({FreelancerPhoneNumber:e.target.value});
    }

    changeFreelancerSkillsets =(e)=>{
        this.setState({FreelancerSkillsets:e.target.value});
    }

    changeFreelancerHobby =(e)=>{
        this.setState({FreelancerHobby:e.target.value});
    }



    refreshList(){
        fetch(variables.API_URL+'Freelancer')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Freelancer:data,FreelancerWithoutFilter:data});
        });
    }


    componentDidMount(){
        this.refreshList();
    }
  

    addClick(){
        this.setState({
            modalTitle:"Add Freelancer",
            FreelancerId:0,
            FreelancerEmail:"",
            FreelancerUsername:"",
            FreelancerPhoneNumber:"",
            FreelancerSkillsets:"",
            FreelancerHobby:""
        });
    }
    editClick(fl){
        this.setState({
            modalTitle:"Edit Freelancer",
            FreelancerId:fl.FreelancerId,
            FreelancerEmail:fl.FreelancerEmail,
            FreelancerUsername:fl.FreelancerUsername,
            FreelancerPhoneNumber:fl.FreelancerPhoneNumber,
            FreelancerSkillsets:fl.FreelancerSkillsets,
            FreelancerHobby:fl.FreelancerHobby
        });
    }

    createClick(){
        fetch(variables.API_URL+'Freelancer',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FreelancerEmail:this.state.FreelancerEmail,
                FreelancerUsername:this.state.FreelancerUsername,
                FreelancerPhoneNumber:this.state.FreelancerPhoneNumber,
                FreelancerSkillsets:this.state.FreelancerSkillsets,
                FreelancerHobby:this.state.FreelancerHobby
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'Freelancer',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FreelancerId:this.state.FreelancerId,
                FreelancerEmail:this.state.FreelancerEmail,
                FreelancerUsername:this.state.FreelancerUsername,
                FreelancerPhoneNumber:this.state.FreelancerPhoneNumber,
                FreelancerSkillsets:this.state.FreelancerSkillsets,
                FreelancerHobby:this.state.FreelancerHobby
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Freelancer/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    render(){
        const {
            Freelancer,
            modalTitle,
            FreelancerId,
            FreelancerEmail,
            FreelancerUsername,
            FreelancerPhoneNumber,
            FreelancerSkillsets,
            FreelancerHobby
        }=this.state;

        return(
<div>

<div className="container">

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Freelancer
    </button>

    <table className="table table-striped">
    <thead>
    <tr>
    <th>
            <div className="d-flex flex-row">

            
            <input className="form-control m-2"
            onChange={this.changeFreelancerIdFilter}
            placeholder="Filter"/>
            
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FreelancerId',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FreelancerId',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>

            </div>

            Id
    </th>
        <th>
            Email
        </th>
        <th>
            <div className="d-flex flex-row">

            
            <input className="form-control m-2"
            onChange={this.changeFreelancerUsernameFilter}
            placeholder="Filter"/>
            
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FreelancerUsername',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('FreelancerUsername',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>

            </div>
             Username
        </th>
        <th>
            PhoneNumber
        </th>
        <th>
            Skillsets
        </th>
        <th>
            Hobby
        </th>
        <th>
            Options
        </th>
    </tr>
    
    </thead>
    
    <tbody>
        {Freelancer.map(fl=>
            <tr key={fl.FreelancerId}>
                <td>{fl.FreelancerId}</td>
                <td>{fl.FreelancerEmail}</td>
                <td>{fl.FreelancerUsername}</td>
                <td>{fl.FreelancerPhoneNumber}</td>
                <td>{fl.FreelancerSkillsets}</td>
                <td>{fl.FreelancerHobby}</td>
                <td>

                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(fl)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(fl.FreelancerId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>
    </div>


    
    
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
   </div>

   <div className="modal-body">

   <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input type="text" className="form-control"
        value={FreelancerEmail}
        onChange={this.changeFreelancerEmail}/>
       </div>

       <div className="input-group mb-3">
        <span className="input-group-text">Username</span>
        <input type="text" className="form-control"
        value={FreelancerUsername}
        onChange={this.changeFreelancerUsername}
        
        />
       </div>

       <div className="input-group mb-3">
        <span className="input-group-text">PhoneNumber</span>
        <input type="text" className="form-control"
        value={FreelancerPhoneNumber}
        onChange={this.ChangeFreelancerPhoneNumber}/>
       </div>

       <div className="input-group mb-3">
        <span className="input-group-text">Skillsets</span>
        <input type="text" className="form-control"
        value={FreelancerSkillsets}
        onChange={this.changeFreelancerSkillsets}/>
       </div>

       <div className="input-group mb-3">
        <span className="input-group-text">Hobby</span>
        <input type="text" className="form-control"
        value={FreelancerHobby}
        onChange={this.changeFreelancerHobby}/>
       </div>

          
   {FreelancerId==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {FreelancerId!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}

   </div>
   


</div>

</div> 

</div>


</div>
        )
    }
}

