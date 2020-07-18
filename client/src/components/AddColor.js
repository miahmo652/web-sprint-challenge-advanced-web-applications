import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


class AddColor extends React.Component {
state = {
addColor: {
        color: "",
        code: { hex: "" }
    }
}
handleChange = e => {
this.setState({
    addColor: {
        ...this.state.addColor,
        [e.target.name]: e.target.value
    }

})
}

newcolor = ()=>{
    axiosWithAuth()
    .post("/colors", this.state.addColor)
    .then(res =>console.log(res))
    .catch(err => console.log(err))
}
    render(){
        return(
            <form onSubmit={this.newcolor}>
                <label>
                    color:
                    <input 
                    name="color"
                    value={this.state.addColor.color}
                    onChange={this.handleChange}
                    />

                </label>

                <label>
                    Color code:
                    <input 
                    name="code"
                    value={this.state.addColor.code.hex}
                    onChange={this.handleChange}
                    />
                </label>
                <button>Add Color</button>

            </form>
        )
    }
}

export default AddColor;