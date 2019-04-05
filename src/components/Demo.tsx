import * as React from "react";
import { StackProps, ImmutableStack } from "./Stack";

class Item {
  constructor(public id: number, public name: string, public place: string) {}
}

export const props: StackProps<Item> = {
  items: [new Item(0, "Red", "Mt. Silver"), new Item(1, "Kasumi", "Hanada City"), new Item(2, "Green", "Unknown")],

  mapCallback: (item) => {
    return(
      <tr key={item.id}>     
        <td>Name: {item.name}</td>
        <td>Place: {item.place}</td>
        <td><button onClick={()=>console.log("!")}>!</button></td>
      </tr>
    );
  }
}

export class StackDemo extends ImmutableStack<StackProps<Item>, {}> {
  constructor(props: StackProps<Item>){
    super(props, {})
  }
}
