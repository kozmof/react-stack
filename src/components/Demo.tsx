import * as React from "react";
import { StackItems, IMStack, MStack } from "./Stack";

class Trainer {
  constructor(public id: number, public name: string, public place: string) {}
}

class Pokemon {
  constructor(public id: number, public name: string) {}
}

export const props: StackItems<Trainer> = {
  items: [new Trainer(0, "Red", "Mt. Silver"), new Trainer(1, "Kasumi", "Hanada City"), new Trainer(2, "Green", "Unknown")],

}

export class IMStackDemo extends IMStack<Trainer, StackItems<Trainer>, {}> {
  constructor(props: StackItems<Trainer>){
    super(props, {});
  }

  callPack() {
    return (item: Trainer) => {
      return(
        <tr key={item.id}>     
          <td>Name: {item.name}</td>
          <td>Place: {item.place}</td>
          <td><button onClick={() => alert("!")}>!</button></td>
        </tr>
      );
    }
  }
}

export class MStackDemo extends MStack<Pokemon, {}, StackItems<Pokemon>> {
  constructor(){
    super({}, {items: [new Pokemon(1, "Bulbasaur"), new Pokemon(4, "Charmander"), new Pokemon(7, "Squirtle")]});
  }

  callPack() {
    const remove = (id: number) => {
      const items = this.state.items;
      for(let n = 0; n < items.length; n++){
        if(items[n].id === id){
          items.splice(n, 1);
          this.setState({items: items});
          return 
        }
      }
    }

    return (item: Pokemon) => {
      return(
        <tr key={item.id}>     
          <td>Name: {item.name}</td>
          <td><button onClick={() => remove(item.id)}>!</button></td>
        </tr>
      );
    }
  }
}

