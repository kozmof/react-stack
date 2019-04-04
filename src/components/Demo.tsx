import * as React from "react";
import { StackProps, ImmutableStack } from "./Stack";

class Item {
   constructor(public id: number, public name: string) {}
}

export let props: StackProps<Item> = {
    items: [new Item(0, "Red"), new Item(1, "Kasumi"), new Item(1, "Green")],

    mapCallback: (item) => {
        return(
            <tr key={ item.id }>     
                <td>{ item.name }</td>
            </tr>
        );
    }
}

export class StackDemo extends ImmutableStack<StackProps<Item>, {}> {
    constructor(props: StackProps<Item>){
        super(props, {})
    }
}
