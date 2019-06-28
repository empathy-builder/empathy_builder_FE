import React from 'react'

class Data extends React.Component {
    state = {
        collapsed: true
    }

    collapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render(){
        const obj = this.props.data
        const arr = Object.entries(obj)
        console.log(arr)
        return(
            <>
                <button onClick={this.collapse}>Dataset {this.props.data.id}</button>
                {!this.state.collapsed && this.props.data && arr.map((data, i) => {
                    return <ol key={i}>{`${data[0]}` + ":" + ` ${data[1]}`}</ol>
                })}
            </>
        )
    }
}

export default Data