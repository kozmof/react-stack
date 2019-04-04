import * as React from "react";

export interface StackProps<T> {
    items : Array<T>;
    mapCallback(item: T): JSX.Element;
}

export class ImmutableStack<P extends StackProps<any>, S> extends React.Component<P, S> {
    constructor(props: P, initial_state: S){
        super(props); 
        this.state = initial_state;
    }

    render(){
        const items = this.props.items || [];
        const rows = items.map(this.props.mapCallback);
        return(
            <table> 
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
