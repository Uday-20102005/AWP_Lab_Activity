import React from 'react';
class Counter2 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={count:0};
        console.log(`component is being created`);
    }
    componentDidMount(){
        console.log("component mounted to dom");
    }
    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.count!=this.state.count)
        {
            console.log(`component updated:New count is ${this.state.count}`);
        }
    }
    componentWillUnmount(){
        console.log(`component is about to be removed from DOM`);
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div><p>Count:{this.state.count}</p><button onClick={this.incrementCount}>Increment</button></div>
        );
    }
}

export default Counter2;
