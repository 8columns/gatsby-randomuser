import React from 'react';
import style from './users.module.css';

let User = (props) => (
	<div className={style.user}>
  		<img src={props.image} alt=""/>
  		<p>Hi!, my name is {props.name}. I live in {props.location}</p>	
	</div>
)

class Users extends React.Component {
  	constructor(props) {
    	super(props);

		this.state = {
			loading:true,
			data:null,
			error:null
		}
  	}

	componentDidMount(){
		fetch('https://randomuser.me/api?results=150&gender='+this.props.gender).then(result=>{
			return result.json();
		}).then(data=>{
			this.setState({
				loading:false,
				data:data.results,
				error:null
			})
		})
	}

  	render() {

      	if (this.state.error!==null){
      		return (<div className={style.users}>something wrong!</div>);
      	} 

      	if ((this.state.data===null) || (this.state.loading===true)){
      		return (<div className={style.users}><p className="loading">loading...</p></div>);
      	} 

      	let users = (this.state.data).map((user)=>{
      		return (
  				<User 
  					image={user.picture.thumbnail} 
  					name={user.name.first+' '+user.name.last} 
  					location={user.location.city+', '+user.location.state+', '+user.location.country}
  				/>
      		)
      	})

      	return (
      		<div className={style.users}>
      			{users}
      		</div>
      	)
  	}
}

export default Users;