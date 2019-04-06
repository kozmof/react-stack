import * as React from "react";

export interface StackProps<T> {
  mapCallback(item: T): JSX.Element;
}

export interface ImmutableStackProps<T> extends StackProps<T> {
  items : Array<T>;
}

export interface MutableStackState<T> {
  items : Array<T>;
}

export class ImmutableStack<P extends ImmutableStackProps<any>, S> extends React.Component<P, S> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.props.mapCallback.bind(this);
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

export class MutableStack<P extends StackProps<any>, S extends MutableStackState<any>> extends React.Component<P, S> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.props.mapCallback.bind(this);
  }

  render(){
    const items = this.state.items || [];
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
