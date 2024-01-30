import {React, Component} from "react";
import Header from "./headers";

class Navbar extends Component {

     constructor()
     {
         super();
         this.state = {
            count : 0,
            message : "How we came this far"
         }

         this.tellMeSomething = this.tellMeSomething.bind(this);
     }

     changeMessage()
     {
        this.setState({
            count : this.state.count + 1
        })
     }

     tellMeSomething()
     {
        alert(`Hear it : ${this.state.message}`);
     }

     render()
     {
        return  (
            <div>
                {/* <h1>{this.state.count}</h1>
                <button onClick={ () => this.changeMessage() }>Change It</button>
                <a href='/' data-toggle="modal" data-target="#passport" data-whatever="@mdo" class="info-box-icon bg-info elevation-1">Content</a> */}
                <Header callMe={ this.tellMeSomething }/>
            </div>
        )
     }
} 

export default Navbar;