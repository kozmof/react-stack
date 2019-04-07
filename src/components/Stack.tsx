import * as React from "react";

interface CallBack<T> {
  callPack(): (item: T) => JSX.Element;
}

export interface StackItems<T> {
  items: Array<T>;
}

export class IMStack<T, P extends StackItems<T>, S> extends React.Component<P, S> implements CallBack<T> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.callPack.bind(this)
  }

  callPack(){
    return (item: T) => {
      return(
        <tr> 
          <td></td>
        </tr>
      );
    }
  }

  render(){
    const items = this.props.items || [];
    const rows = items.map(this.callPack());
    return(
      <table> 
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export class MStack<T, P, S extends StackItems<T>> extends React.Component<P, S> implements CallBack<T> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.callPack.bind(this);
  }

  callPack(){
    return (item: T) => {
      return(
        <tr> 
          <td></td>
        </tr>
      );
    }
  }

  render(){
    const rows = this.state.items.map(this.callPack());
    return(
      <table> 
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
