import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

    class Avatar extends Component{
            constructor(){
                super();
                this.state={
                    name:"Incredible Programmers "
                }
            }

            namechange(){
                this.setState({
                    name:"Future of our Country"
                })
            }

        render(){
            const avatarlistarray =[
                {
                    id:0,
                    name:"madaan",
                    work:"Front End Developer"
                },
                {
                    id:1,
                    name:"Prachi",
                    work:"Designer"
                },
                {
                    id:2,
                    name:"  Choti",
                    work:"App Developer"
                },
                {
                    id:3,
                    name:"  Ankur",
                    work:"Competitive Programmer"
                },
                {
                    id:4,
                    name:"  Kanchii",
                    work:"Front End Developer"
                },
                {
                    id:5,
                    name:"Binod",
                    work:"Designer"
                },
                {
                    id:6,
                    name:"  Leeza",
                    work:"App Developer"
                },
                {
                    id:7,
                    name:"           Jatin",
                    work:"Competitive Programmer"
                }
            ]
        
            const arrayavatarcard = avatarlistarray.map((avatarcard,i)=>{
                return <Avatarlist key={i} id={avatarlistarray[i].name} 
                            name={avatarlistarray[i].name} 
                            work={avatarlistarray[i].work} />
            })

            return (<div className="mainpage">
                <h1 className="tc">{this.state.name}</h1>
                {arrayavatarcard}
                <button className="btn" onClick ={ ()=> this.namechange() }>Who Are they</button>
                <footer className="tc pt3">Made with &#x2764; | Copyright © Madaan Creations</footer>
                </div>
            )
        }
    }
    
export default Avatar;